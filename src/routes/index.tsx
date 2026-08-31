import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ShieldCheck, Layers, Sparkles, Wallet, Gauge, Headphones } from "lucide-react";
import { services } from "@/data/services";
import { photos, accreditations, servicePhotos } from "@/data/photos";
import { CTASection } from "@/components/site/CTASection";

const heroImg = photos.interiorLivingWide;
const servicesBackdrop = photos.siteSteelFrame;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plama Projects — Engineering Consultancy, Five Dock NSW" },
      { name: "description", content: "Sydney-based multidisciplinary engineering consultancy delivering structural, civil, façade, marine and hydraulic engineering — senior-led, in-house, end-to-end." },
    ],
  }),
  component: Home,
});

const featuredServices = services.map((s) => ({
  ...s,
  image: servicePhotos[s.slug]?.hero ?? servicePhotos.structural.hero,
}));

const strengths = [
  { icon: ShieldCheck, title: "Experienced team", desc: "Our professional engineers are fully qualified in Civil and Structural Engineering, involving in diverse design and construction of all sectors." },
  { icon: Layers, title: "Customer service", desc: "We are focused on providing a high level of customer service through our experienced team." },
  { icon: Sparkles, title: "Time and cost", desc: "Our commitment is to ensure that the design and documentation we provide meets the time, cost, quality and build-ability expectations of our clients." },
  { icon: Wallet, title: "Broad vision", desc: "Professional engineers providing broad vision expertise for the residential, commercial, industrial and infrastructure market sectors." },
  { icon: Gauge, title: "Quality assurance", desc: "We use advanced computer-aided design (CAD), finite element analysis (FEA) software, and modern engineering techniques." },
  { icon: Headphones, title: "Diverse sectors", desc: "Clients include leading residential builders, development companies, government authorities, and manufacturing companies." },
];

const featuredProjects = [
  {
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20180914_150128-scaled.jpg",
    title: "New Built",
    tag: "Knock Down - Rebuilt",
  },
  {
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/05/style_2_right1-1.jpeg",
    title: "Renovations",
    tag: "Alterations & Additions",
  },
];



function Home() {
  return (
    <>
      <Hero />
      <Accreditations />
      <Intro />
      <FeaturedServices />
      <WhyUs />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}

function Accreditations() {
  return (
    <section className="bg-[var(--surface)] border-b border-[var(--ink)]/10">
      <div className="container-px mx-auto w-full py-10 md:py-14">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Professional Accreditations</span>
          <p className="mt-3 max-w-xl text-sm md:text-base text-[var(--ink-soft)] leading-relaxed">
            Our team is accredited and registered with leading professional engineering bodies across Australia and the Asia-Pacific region.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex items-center gap-14 md:gap-20 animate-marquee w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-14 md:gap-20 pr-14 md:pr-20">
                {accreditations.map((a) => (
                  <img
                    key={a.src}
                    src={a.src}
                    alt={a.alt}
                    loading="lazy"
                    className="h-20 md:h-24 w-auto object-contain transition-all duration-500"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] overflow-hidden bg-[var(--brand-deep)]">
      <img src={heroImg} alt="" width={1920} height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#14181C]/85 via-[#14181C]/55 to-[#14181C]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#14181C]/70 to-transparent" />
      {/* Top light wash so the wordmark logo reads on the dark banner */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 md:h-80"
        style={{
          background:
            "linear-gradient(to bottom, rgba(246,243,236,0.55) 0%, rgba(246,243,236,0.42) 20%, rgba(246,243,236,0.26) 45%, rgba(246,243,236,0.12) 70%, rgba(246,243,236,0.04) 88%, rgba(246,243,236,0) 100%)",
        }}
      />



      <div className="relative container-px mx-auto w-full pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl animate-rise">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-white/80">
            <span className="h-px w-10 bg-[var(--accent-orange)]" />
            Engineering Consultancy · Sydney
          </div>
          <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering Firm <br />
            <span className="italic font-light text-white/90">based in</span>
            <span className="text-[var(--accent-orange)]"> Sydney.</span>
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base md:text-lg text-white/75 leading-relaxed">
            <p>
              Plama Projects banks on nearly 20 years of experience in the construction and building
              consulting industry and has been in the Sydney market since 2017. We have experience in
              residential, commercial, high rise and industrial buildings. We cover the Sydney metropolitan
              area and the built environment — in particular throughout the Eastern Suburbs, Sydney CBD,
              Northern Beaches, Hills District, Canterbury-Bankstown, Northern Suburbs, South Western Sydney,
              Western Sydney, Forest District, South-Eastern Sydney, Fairfield-Liverpool, Strathfield-Homebush,
              and Drummoyne, Five Dock area where the business is located.
            </p>
            <p>
              Our hours of operation are from 9am to 5:30pm Monday to Friday and flexible on demand. We are
              fully insured &amp; accredited. Our projects are highly recognized and delivered quickly at the
              highest quality with satisfaction guaranteed. We maintain the integrity of designs by carrying
              out in-house services for a wide range of aspects of the project such as Structure, Stormwater,
              Hydraulic and Civil, Glass and Façade Engineering.
            </p>
            <p>
              Our prices are affordable, all-inclusive &amp; fixed without compromising standard and quality —
              quick turnover, reliable and accountable, efficient and best customer services.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request a Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2.5 text-white/90 hover:text-white text-sm font-medium px-2 group">
              <span className="border-b border-white/30 group-hover:border-white pb-0.5">Explore our services</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-14 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#14181C]/60 backdrop-blur-sm px-6 py-5 rounded-2xl border border-white/15">
              <div className="font-display text-2xl md:text-3xl text-white">
                APEC<span className="text-[var(--accent-orange)]">.</span>
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                Accredited Engineer & <br />
                Chartered Member EA
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-px mx-auto w-full py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow">Our Specializations</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
            Innovative solutions in <span className="italic text-[var(--brand)]">various sectors.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-base leading-relaxed text-[var(--ink-soft)]">
            At our firm, we take pride in offering a broad services that cater to our clients' needs 
            from the outset of a project all the way to its completion. We use advanced computer-aided design (CAD), 
            finite element analysis (FEA) software, and modern engineering techniques to ensure the quality and accuracy of your projects.
          </p>
          <div className="mt-6">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
              Learn more about us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <img
        src={servicesBackdrop}
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
              Multidisciplinary. <span className="italic text-white/75">One team.</span>
            </h2>
          </div>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-white/60">
            All {featuredServices.length} disciplines
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredServices.map(({ title, short, route }, i) => (
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
  );
}

function WhyUs() {
  return (
    <section className="container-px mx-auto w-full py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-6">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
            Best fit <span className="italic text-[var(--brand)]">services.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-sm text-[var(--ink-soft)]">
            We are focused on providing a high level of customer service through our experienced team 
            and ensuring the documentation we provide meets time and cost expectations.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {strengths.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="relative rounded-xl p-4 border border-border bg-white">
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base text-[var(--ink)]">{title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
          More about our approach <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="bg-[var(--surface)] py-16 md:py-24 overflow-hidden">
      <div className="container-px mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Engineered across the <span className="italic text-[var(--brand)]">built environment.</span>
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)]">
            View portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map(({ img, title, tag }, i) => {
            const idx = String(i + 1).padStart(2, "0");
            const isRight = i % 2 === 0;
            return (
              <div key={title} className="relative grid grid-cols-12 gap-3 md:gap-6 items-center">
                <div className={`col-span-11 ${isRight ? "col-start-1" : "col-start-2"} relative`}>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group rounded-lg">
                    <img src={img} alt={title} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                    
                    <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white group/link">
                      View project <span className="h-px w-6 bg-[var(--accent-orange)] transition-all group-hover/link:w-10" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

