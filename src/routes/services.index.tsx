import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { photos } from "@/data/photos";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

const heroImg = photos.siteNewBuild;
const gridBackdrop = photos.siteSteelFrame;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — Plama Projects Sydney" },
      {
        name: "description",
        content:
          "Structural, civil, glazing and façade, marine, hydraulic engineering, expert reports, certificates and project management — all under one senior-led Sydney team.",
      },
      { property: "og:title", content: "Our Services — Plama Projects Sydney" },
      {
        property: "og:description",
        content:
          "Structural, civil, glazing and façade, marine, hydraulic engineering, expert reports, certificates and project management — all under one senior-led Sydney team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Multidisciplinary."
        italic="One team."
        body="We offer a broad range of services that cater to our clients' needs from the outset of a project all the way to its completion. We use advanced computer-aided design (CAD), finite element analysis (FEA) software, and modern engineering techniques to ensure the quality and accuracy of your projects."
        image={heroImg}
      />

      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <img
          src={gridBackdrop}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--brand-deep)]/85" />
        <div className="container-px mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="eyebrow text-white/60">Featured Services</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-white text-balance">
                Explore all <span className="italic text-white/75">disciplines.</span>
              </h2>
            </div>
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-white/60">
              All {services.length} disciplines
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ title, short, route }, i) => (
              <Link
                key={title}
                to={route}
                className="group relative overflow-hidden rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm p-6 flex flex-col justify-between transition hover:-translate-y-1 hover:bg-white/15 hover:border-white/30"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/60">
                    <span className="h-px w-6 bg-[var(--accent-orange)]" />
                    Service
                  </span>
                  <span className="text-[10px] text-white/50">0{i + 1}</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-lg md:text-xl text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-3">{short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent-orange)] transition-colors">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
