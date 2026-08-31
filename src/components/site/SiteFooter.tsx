import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";


const servicesLinks = [
  { to: "/services", hash: "structural", label: "Structural Engineering" },
  { to: "/services", hash: "civil", label: "Civil Engineering" },
  { to: "/services", hash: "facade", label: "Glazing/ Glass and Façade" },
  { to: "/services", hash: "hydraulic", label: "Hydraulic & Stormwater" },
  { to: "/services", hash: "marine", label: "Marine Structural" },
  { to: "/services", hash: "expert-reports", label: "Expert Report" },
  { to: "/services", hash: "certificates", label: "Certificate" },
  { to: "/services", hash: "project-management", label: "Project Management" },
] as const;

const companyLinks = [
  { to: "/about", label: "About Us" },
  // Industries link removed
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative bg-[#14181C] text-white/75 border-t border-white/10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            "linear-gradient(to bottom, rgba(246,243,236,0.45) 0%, rgba(246,243,236,0.32) 22%, rgba(246,243,236,0.18) 48%, rgba(246,243,236,0.08) 72%, rgba(246,243,236,0.02) 90%, rgba(246,243,236,0) 100%)",
        }}
      />

      <div className="relative container-px mx-auto w-full py-14 grid gap-10 md:grid-cols-12">

        <div className="md:col-span-5">




          <p className="mt-4 text-sm max-w-sm leading-relaxed text-white/60">
            With every new project, we are faced with a fresh challenge of upholding our commitment to providing top-notch customer satisfaction.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <PhoneCall className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <a href="tel:+61283843919" className="hover:text-white">+61 2 8384 3919</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <a href="tel:0452588578" className="hover:text-white">0452 588 578</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <a href="mailto:plama.pro@outlook.com" className="hover:text-white">plama.pro@outlook.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--accent-orange)]" />
              <span>1 Kerin Avenue,<br />Five Dock NSW 2046</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            {servicesLinks.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/services/$slug"
                  params={{ slug: l.hash }}
                  className="hover:text-white transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1" />
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto w-full py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Plama Projects. All rights reserved.</span>
          <span>Multidisciplinary Engineering Consultancy · Sydney, NSW</span>
        </div>
      </div>
    </footer>
  );
}
