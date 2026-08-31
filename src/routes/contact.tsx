import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-structure.jpg";

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
              <form
                className="mt-6 grid gap-4"
                action="mailto:plama.pro@outlook.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Project location" name="location" placeholder="Suburb, NSW" />
                </div>
                <Field label="Service required" name="service" placeholder="e.g. Structural, Civil, Façade" />
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">Project brief</label>
                  <textarea name="message" rows={5} required
                    className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                    placeholder="Tell us about your site, timeline and what you're trying to build." />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Attachments <span className="normal-case tracking-normal text-[var(--ink-soft)]">(drawings, photos, reports — files or a folder)</span>
                  </label>
                  <div className="mt-2 grid sm:grid-cols-2 gap-3">
                    <label className="flex items-center justify-center gap-2 rounded-md border border-dashed border-border bg-white px-3 py-3 text-sm text-[var(--ink-soft)] hover:border-[var(--brand)] hover:text-[var(--brand)] cursor-pointer transition">
                      <input type="file" name="files" multiple className="sr-only" />
                      <span>+ Select files</span>
                    </label>
                    <label className="flex items-center justify-center gap-2 rounded-md border border-dashed border-border bg-white px-3 py-3 text-sm text-[var(--ink-soft)] hover:border-[var(--brand)] hover:text-[var(--brand)] cursor-pointer transition">
                      <input
                        type="file"
                        name="folder"
                        className="sr-only"
                        ref={(el) => {
                          if (el) {
                            el.setAttribute("webkitdirectory", "");
                            el.setAttribute("directory", "");
                          }
                        }}
                      />
                      <span>+ Select folder</span>
                    </label>
                  </div>
                  <p className="mt-2 text-xs text-[var(--ink-soft)]">
                    Large files? Email attachments directly to <a href="mailto:plama.pro@outlook.com" className="text-[var(--brand)] underline">plama.pro@outlook.com</a>.
                  </p>
                </div>
                <button type="submit" className="btn-primary self-start">
                  Send enquiry
                </button>
                <p className="text-xs text-[var(--ink-soft)]">
                  Prefer to email directly? Reach us at{" "}
                  <a href="mailto:plama.pro@outlook.com" className="text-[var(--brand)] hover:text-[var(--accent-orange)] underline">plama.pro@outlook.com</a>.
                </p>
              </form>
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
