import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Choose Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/60">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          
          {/* ✅ Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="ByTech Wave Logo"
                className="h-16 w-auto object-contain"
              />
            </a>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Affordable digital marketing & web services for small businesses, startups, and local shops. Grow online with confidence.
            </p>
          </div>

          {/* ✅ Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="tel:+918290079076"
                  className="hover:text-primary transition-colors"
                >
                  +91 8290079076
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="mailto:support@bytechwave.com"
                  className="hover:text-primary transition-colors"
                >
                  support@bytechwave.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Serving businesses worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Bottom */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ByTech Wave. All rights reserved.</p>
          <p>Crafted with care for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;