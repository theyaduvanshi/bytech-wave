import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-custom">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          {/* ✅ LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="ByTech Wave Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* ✅ DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-mix group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ CALL BUTTON */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="sm">
              <a href="tel:+918290079076">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
          </div>

          {/* ✅ MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-soft transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* ✅ MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-5 shadow-elegant animate-fade-in-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button asChild variant="hero" className="w-full mt-3">
              <a href="tel:+918290079076">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;