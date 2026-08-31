import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/data/photos";

const heroImg = photos.diningWide;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Plama Projects" },
      { name: "description", content: "A selection of representative engineering projects delivered by Plama Projects across Sydney." },
      { property: "og:title", content: "Projects — Plama Projects" },
      { property: "og:description", content: "Representative engineering work across residential, commercial, healthcare and marine sectors." },
    ],
  }),
  component: Projects,
});

const B="https://plamaprojects.com.au/wp-content/uploads/";

const projects = [
  { img: B + "2023/07/IMG_20180914_150128-scaled.jpg", title: "New Built", tag: "Knock Down - Rebuilt" },
  { img: B + "2023/05/video-bg-1-1.jpg", title: "Townhouses", tag: "Knock Down - Rebuilt" },
  { img: B + "2023/05/style_2_right1-1.jpeg", title: "Renovations", tag: "Alterations & Additions" },
  { img: B + "2023/07/IMG_20170430_075357-1-scaled.jpg", title: "Facade", tag: "Facade Engineering" },
  { img: B + "2023/07/flood-map-scaled.jpg", title: "Flood Study", tag: "Flood Study" },
  { img: B + "2023/07/stamped_1-AEP-Suspended-Floor-Max-Water-Depth-scaled.jpg", title: "Flood Study", tag: "Flood Study" },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="We Have Solutions for A Wide Range of"
        italic="Projects"
        accent="!"
        body="A representative selection of the residential, commercial, and infrastructure work delivered by our multidisciplinary team."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24 overflow-hidden">
        <div className="space-y-16 md:space-y-24">
          {projects.map(({ img, title, tag }, i) => {
            const idx = String(i + 1).padStart(2, "0");
            const isRight = i % 2 === 0;
            return (
              <div key={title + i} className="relative grid grid-cols-12 gap-3 md:gap-6 items-center">
                <div className={`col-span-11 ${isRight ? "col-start-1" : "col-start-2"} relative`}>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group rounded-lg">
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`col-span-11 md:col-span-6 -mt-10 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${isRight ? "col-start-2 md:right-0" : "col-start-1 md:left-0"}`}>
                  <div className={`bg-[var(--brand)] text-white p-5 md:p-7 shadow-xl ${isRight ? "border-l-4" : "border-r-4"} border-[var(--accent-orange)]`}>
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/60">
                      <span>{idx}</span>
                      <span className="h-px w-8 bg-[var(--accent-orange)]" />
                      <span>{tag}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl italic">{title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}

