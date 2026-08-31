import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export function CTASection({
  eyebrow = "Start a Project",
  title,
  body,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="relative bg-[#14181C] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--accent-orange) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand) 0%, transparent 50%)",
        }}
      />
      <div className="container-px mx-auto w-full py-16 md:py-20 relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
              <span className="h-px w-8 bg-[var(--accent-orange)]" /> {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-balance">
              {title ?? (
                <>
                  Let's engineer<br />
                  <span className="italic text-white/80">your next</span>
                  <span className="text-[var(--accent-orange)]"> project.</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/75 leading-relaxed">
              {body ??
                "Our experienced team is equipped with the knowledge, skills, and tools to ensure efficiency and precision. We prioritize quality, excellence, and client satisfaction."}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request a Consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0452588578"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[var(--brand)] transition"
              >
                Call 0452 588 578 <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/15 flex flex-col justify-center gap-4 text-sm">
            <a href="tel:+61283843919" className="flex items-center gap-3 hover:text-white text-white/80">
              <Phone className="h-4 w-4 text-[var(--accent-orange)]" /> +61 2 8384 3919
            </a>
            <a href="tel:0452588578" className="flex items-center gap-3 hover:text-white text-white/80">
              <Phone className="h-4 w-4 text-[var(--accent-orange)]" /> 0452 588 578
            </a>
            <a href="mailto:plama.pro@outlook.com" className="flex items-center gap-3 hover:text-white text-white/80">
              <Mail className="h-4 w-4 text-[var(--accent-orange)]" /> plama.pro@outlook.com
            </a>
            <div className="text-white/60 text-xs uppercase tracking-[0.22em] mt-2">
              1 Kerin Avenue, Five Dock NSW 2046 · Mon–Fri 9:00–5:30
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
