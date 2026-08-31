import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/data/services";
const plamaLogo = { url: "/plama-logo.png" };

const serviceLinks = services.map((s) => ({
  slug: s.slug,
  label: s.title,
}));

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Transparent over hero on home; solid elsewhere or after scroll
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#F6F3EC]/95 backdrop-blur-md shadow-[0_1px_0_0_#C9C3B6]" : "bg-transparent"
      }`}
    >

      <div
        className={`container-px mx-auto w-full flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-3 md:py-4"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img
            src={plamaLogo.url}
            alt="Plama Projects"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-8 md:h-10" : "h-20 md:h-28"
            }`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav
            className={`flex items-center gap-9 text-lg md:text-xl transition-colors ${
              solid ? "text-[var(--ink)]" : "text-white/85"
            }`}
          >
            <NavLink to="/" label="Home" exact />
            <NavLink to="/about" label="About" />
            {/* Services dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:opacity-70 transition"
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                <div className="w-80 rounded-xl bg-white shadow-2xl border border-[#C9C3B6]/60 py-2 overflow-hidden">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-center justify-between px-5 py-2.5 text-sm text-[var(--ink)] hover:bg-[var(--surface)] hover:text-[var(--brand)] transition"
                      activeProps={{ className: "text-[var(--accent-orange)] font-semibold" }}
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-40" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <NavLink to="/projects" label="Projects" />
            <NavLink to="/contact" label="Contact" />
          </nav>

          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition ${
              solid
                ? "bg-[var(--brand)] text-white hover:bg-[var(--accent-orange)]"
                : "bg-white text-[var(--brand)] hover:bg-[var(--accent-orange)] hover:text-white"
            }`}
          >
            Request Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition ${
              solid
                ? "bg-[var(--brand)] text-white hover:bg-[var(--accent-orange)]"
                : "bg-white text-[var(--brand)] hover:bg-[var(--accent-orange)] hover:text-white"
            }`}
          >
            Request Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className={`grid place-items-center h-10 w-10 rounded-md ${
              solid ? "text-[var(--ink)]" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="container-px mx-auto w-full py-4 flex flex-col text-[var(--ink)] text-sm">
            <MobileLink to="/" label="Home" />
            <MobileLink to="/about" label="About" />
            <button
              type="button"
              className="flex items-center justify-between py-2 text-left hover:text-[var(--brand)]"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="flex flex-col pl-4 border-l border-border ml-1">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="py-2 text-xs text-[var(--ink-soft)] hover:text-[var(--brand)]"
                    activeProps={{ className: "text-[var(--accent-orange)] font-semibold" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <MobileLink to="/projects" label="Projects" />
            <MobileLink to="/contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label, exact }: { to: string; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      className="hover:opacity-70 transition"
      activeProps={{ className: "font-semibold text-[var(--accent-orange)]" }}
      activeOptions={{ exact: exact ?? false }}
    >
      {label}
    </Link>
  );
}

function MobileLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="py-2 hover:text-[var(--brand)]"
      activeProps={{ className: "text-[var(--accent-orange)] font-semibold" }}
    >
      {label}
    </Link>
  );
}
