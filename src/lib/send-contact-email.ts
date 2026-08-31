import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
];

const attachmentSchema = z.object({
  filename: z.string().min(1),
  contentType: z.string(),
  size: z.number().max(MAX_FILE_SIZE, "File exceeds 5MB limit"),
  base64: z.string(),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  location: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  attachments: z.array(attachmentSchema).max(5, "Maximum 5 files").default([]),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export const sendContactEmail = createServerFn(
  "POST",
  async (payload: ContactPayload) => {
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues.map((i) => i.message).join(", "),
      };
    }
    const data = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return {
        ok: false,
        error: "Email service is not configured. Please email us directly.",
      };
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const html = [
      `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#14181C">`,
      `<h2 style="color:#445066">New enquiry from ${escapeHtml(data.name)}</h2>`,
      `<table style="border-collapse:collapse;font-size:14px">`,
      row("Name", data.name),
      row("Email", data.email),
      row("Phone", data.phone || "—"),
      row("Location", data.location || "—"),
      row("Service", data.service || "—"),
      row("Subject", data.subject),
      `</table>`,
      `<h3 style="color:#445066;margin-top:24px">Message</h3>`,
      `<p style="white-space:pre-wrap;font-size:14px">${escapeHtml(data.message)}</p>`,
      data.attachments.length
        ? `<p style="color:#888;font-size:12px;margin-top:24px">${data.attachments.length} attachment(s) included</p>`
        : "",
      `</div>`,
    ].join("");

    const attachments = data.attachments.map((a) => ({
      filename: a.filename,
      content: Buffer.from(a.base64, "base64"),
      contentType: a.contentType || undefined,
    }));

    try {
      const { error } = await resend.emails.send({
        from: "Plama Projects <onboarding@resend.dev>",
        to: ["plama.pro@outlook.com", "ryanrogers636@gmail.com"],
        replyTo: `${data.name} <${data.email}>`,
        subject: `Website enquiry: ${data.subject}`,
        html,
        attachments: attachments.length ? attachments : undefined,
      });

      if (error) {
        return { ok: false, error: error.message || "Failed to send email" };
      }
      return { ok: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { ok: false, error: message };
    }
  },
);

function row(label: string, value: string) {
  return `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#445066;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
