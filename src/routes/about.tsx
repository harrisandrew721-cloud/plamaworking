import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-structure.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Plama Projects — Sydney Engineering Consultancy" },
      { name: "description", content: "Meet the multidisciplinary Sydney engineering consultancy behind Plama Projects — nearly 20 years of senior-led, in-house engineering." },
      { property: "og:title", content: "About Plama Projects" },
      { property: "og:description", content: "Sydney multidisciplinary engineering consultancy — senior-led, in-house, end-to-end." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Innovation & thoroughness", desc: "Pragmatic engineering and meticulous detailing for every project." },
  { title: "Responsiveness", desc: "Fast project delivery and prompt replies to all client enquiries." },
  
  { title: "Hands-on approach", desc: "Ensuring efficiency & quality from start to finish." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="A Few Words About"
        italic="Our"
        accent=" Firm."
        body="Plama Projects provides civil, structural engineering services to the residential, commercial, industrial and infrastructure market sectors. Our professional engineers are fully qualified and involved in diverse projects across all sectors."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              Professional engineers providing <span className="italic text-[var(--brand)]">broad vision</span> expertise.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-4 text-[var(--ink-soft)] text-base leading-relaxed">
            <p>
              Plama Projects provides civil, structural engineering services to the residential, 
              commercial, industrial and infrastructure market sectors. Our clients include 
              leading residential builders, development companies, government authorities, 
              manufacturing companies and Architects.
            </p>
            <p>
              Our professional engineers are fully qualified in Civil and Structural Engineering, 
              involving in diverse design and construction of all sectors — commercial, industrial, 
              infrastructure, community & residential.
            </p>
            <p>
              We are focused on providing a high level of customer service through our experienced team. 
              Our commitment is to ensure that the design and documentation we provide meets the 
              time, cost, quality and build-ability expectations of our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-px mx-auto w-full">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              What we hold ourselves to.
            </h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white p-6">
                <div className="text-xs tracking-[0.22em] uppercase text-[var(--accent-orange)]">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl text-[var(--ink)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="bg-[var(--brand)] text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--accent-orange)]/20 blur-3xl" />
        <div className="container-px mx-auto w-full py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="inline-block bg-[var(--accent-orange)] text-white p-6 rounded-2xl">
                <div className="font-display text-4xl leading-none">20<span className="text-2xl">+</span></div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.18em]">Years engineering Sydney</div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
                <span className="h-px w-8 bg-[var(--accent-orange)]" /> Founder Spotlight
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-balance">
                Lucas Tran<span className="text-[var(--accent-orange)]">.</span>
              </h2>
              <p className="mt-2 text-white/70 text-sm">Principal Engineer, Director, Founder</p>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Lucas is the principal engineer/designer and founder of Plama Projects. 
                His previous experience includes varied roles in design, project management 
                and business management.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Chartered Professional Engineer",
                  "Accredited by Engineers Australia",
                  "National Professional Engineers (Structural and Civil)",
                  "NSW Fair Trading – Class 2 Buildings",
                  "Registered Professional Engineer (Structure, Civil, Stormwater)",
                  "Registered Design Practitioner (Structure, Civil, Stormwater)",
                  "Principal Design Practitioner",
                  "APEC Engineer",
                  "International Professional Engineer",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 border-l-2 border-[var(--accent-orange)] pl-3 py-1">
                    <span className="text-xs leading-relaxed text-white/90">{q}</span>
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 border-t border-white/15 pt-5">
                <Quote className="h-4 w-4 text-[var(--accent-orange)] mb-2" />
                <p className="font-display italic text-base md:text-lg text-white/95 text-balance leading-snug">
                  "Great engineering is invisible. It lets architecture, builders and owners do
                  their best work — quietly, and without drama."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { to: "/services/$slug", params: { slug: "structural" }, label: "Explore Services", desc: "Structural, civil, façade, hydraulic, marine and more." },
            { to: "/projects", label: "Projects", desc: "A selection of representative work across Sydney." },
          ].map((c) => (
            <Link
              key={c.label}
              to={c.to}
              params={"params" in c ? c.params : undefined}
              className="group bg-white border border-border rounded-xl p-6 hover:border-[var(--brand)] transition-colors"
            >
              <h3 className="font-display text-xl text-[var(--ink)]">{c.label}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--brand)] group-hover:text-[var(--accent-orange)]">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
