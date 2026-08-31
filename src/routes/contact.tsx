import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, PhoneCall, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { useState, useRef, useCallback, type ReactNode, type ChangeEvent, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { sendContactEmail } from "@/lib/send-contact-email";
import heroImg from "@/assets/hero-structure.jpg";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
const ACCEPTED_EXTS = [".pdf", ".png", ".jpg", ".jpeg"];
const MAX_FILES = 5;

type Status = "idle" | "loading" | "success" | "error";
type FileItem = { file: File; error?: string };

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Plama Projects — Engineering Consultancy Sydney" },
      { name: "description", content: "Talk to a senior engineer. Fixed scope, fixed fee — call 0452 588 578 or email plama.pro@outlook.com." },
      { property: "og:title", content: "Contact Plama Projects" },
      { property: "og:description", content: "Talk directly to a senior engineer about your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [files, setFiles] = useState<FileItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((file: File): string | undefined => {
    if (file.size > MAX_FILE_SIZE) return `${file.name} exceeds 5MB`;
    const ext = "." + (file.name.split(".").pop() || "").toLowerCase();
    if (!ACCEPTED_EXTS.includes(ext)) return `${file.name} is not a supported format (PDF, PNG, JPG)`;
    return undefined;
  }, []);

  const handleFiles = useCallback((incoming: FileList | null) => {
    if (!incoming) return;
    const next: FileItem[] = [];
    for (const f of Array.from(incoming)) {
      if (files.length + next.length >= MAX_FILES) break;
      next.push({ file: f, error: validateFile(f) });
    }
    setFiles((prev) => [...prev, ...next].slice(0, MAX_FILES));
  }, [files.length, validateFile]);

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1] ?? "");
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const validFiles = files.filter((f) => !f.error);
    const attachments = await Promise.all(
      validFiles.map(async (f) => ({
        filename: f.file.name,
        contentType: f.file.type,
        size: f.file.size,
        base64: await fileToBase64(f.file),
      })),
    );

    try {
      const result = await sendContactEmail({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? "") || undefined,
        location: String(fd.get("location") ?? "") || undefined,
        subject: String(fd.get("subject") ?? ""),
        service: String(fd.get("service") ?? "") || undefined,
        message: String(fd.get("message") ?? ""),
        attachments,
      });

      if (result.ok) {
        setStatus("success");
        form.reset();
        setFiles([]);
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's engineer"
        italic="your next"
        accent=" project."
        body="Contact us by phone, email or via the online form below. Our company delivers top-notch engineering services to a range of industries. Clients trust us to handle any project."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="eyebrow">Direct contact</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
                Talk to a <span className="italic text-[var(--brand)]">senior engineer.</span>
              </h2>
              <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">
                No call centre, no gatekeeper. Every enquiry lands with a chartered engineer
                who can talk through your brief on the first call.
              </p>
            </div>

            <div className="space-y-4">
              <Row icon={PhoneCall} label="Landline" value="+61 2 8384 3919" href="tel:+61283843919" />
              <Row icon={Phone} label="Mobile" value="0452 588 578" href="tel:0452588578" />
              <Row icon={Mail} label="Email" value="plama.pro@outlook.com" href="mailto:plama.pro@outlook.com" />
              <Row icon={MapPin} label="Office" value={<>1 Kerin Avenue<br />Five Dock NSW 2046</>} />
              <Row icon={Clock} label="Hours" value={<>Monday – Friday · 9:00am – 5:30pm<br /><span className="text-[var(--ink-soft)]">Flexible by appointment</span></>} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[var(--surface)] border border-border rounded-2xl p-6 md:p-8">
              <span className="eyebrow">Send an enquiry</span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl text-[var(--ink)]">
                Brief us on your project.
              </h3>

              {status === "success" ? (
                <div className="mt-8 flex flex-col items-center text-center py-12">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="mt-5 font-display text-2xl text-[var(--ink)]">Enquiry sent</h4>
                  <p className="mt-2 max-w-sm text-sm text-[var(--ink-soft)] leading-relaxed">
                    Thank you for reaching out. A senior engineer will get back to you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-ghost mt-6"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Project location" name="location" placeholder="Suburb, NSW" />
                  </div>
                  <Field label="Subject" name="subject" required placeholder="e.g. Structural certification for new build" />
                  <Field label="Service required" name="service" placeholder="e.g. Structural, Civil, Façade" />
                  <div>
                    <label className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">Project brief</label>
                    <textarea name="message" rows={5} required
                      className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                      placeholder="Tell us about your site, timeline and what you're trying to build." />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      Attachments <span className="normal-case tracking-normal text-[var(--ink-soft)]">(PDF, PNG, JPG — up to 5MB each, max 5 files)</span>
                    </label>
                    <div className="mt-2">
                      <label className="flex items-center justify-center gap-2 rounded-md border border-dashed border-border bg-white px-3 py-3 text-sm text-[var(--ink-soft)] hover:border-[var(--brand)] hover:text-[var(--brand)] cursor-pointer transition">
                        <input
                          ref={fileInputRef}
                          type="file"
                          name="files"
                          multiple
                          accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                          className="sr-only"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
                        />
                        <span>+ Select files</span>
                      </label>
                    </div>
                    {files.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center justify-between gap-3 rounded-md bg-white border border-border px-3 py-2">
                            <span className="text-sm text-[var(--ink)] truncate flex-1">{f.file.name}</span>
                            {f.error ? (
                              <span className="text-xs text-red-600 shrink-0">{f.error}</span>
                            ) : (
                              <span className="text-xs text-[var(--ink-soft)] shrink-0">
                                {(f.file.size / 1024).toFixed(0)} KB
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              aria-label={`Remove ${f.file.name}`}
                              className="text-[var(--ink-soft)] hover:text-red-600 transition shrink-0"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-2 text-xs text-[var(--ink-soft)]">
                      Large files? Email attachments directly to <a href="mailto:plama.pro@outlook.com" className="text-[var(--brand)] underline">plama.pro@outlook.com</a>.
                    </p>
                  </div>

                  {status === "error" && errorMsg && (
                    <div className="flex items-start gap-3 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      "Send enquiry"
                    )}
                  </button>
                  <p className="text-xs text-[var(--ink-soft)]">
                    Prefer to email directly? Reach us at{" "}
                    <a href="mailto:plama.pro@outlook.com" className="text-[var(--brand)] hover:text-[var(--accent-orange)] underline">plama.pro@outlook.com</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: ReactNode; href?: string }) {
  const inner = (
    <>
      <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)] shrink-0 group-hover:bg-[var(--accent-orange)] group-hover:text-white transition">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">{label}</div>
        <div className="mt-1 font-display text-base text-[var(--ink)] leading-snug">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-3.5 group">{inner}</a>
  ) : (
    <div className="flex items-start gap-3.5 group">{inner}</div>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
        {label}{required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
      />
    </div>
  );
}
