import { Globe, MapPin, FileText, Search, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Informational Website Development",
    desc: "Beautiful, fast one-page and multi-page websites that present your business clearly and convert visitors into customers.",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "GBP Creation & Optimization",
    desc: "Get your business on Google Maps. We set up and fine-tune your Google Business Profile to attract local customers actively searching for you.",
    color: "secondary",
  },
  {
    icon: FileText,
    title: "Content Creation",
    desc: "Engaging website copy, blog posts, and social captions written to inform your audience and rank on search engines.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Google Search Console Setup",
    desc: "Proper indexing, sitemaps, and performance monitoring so Google sees, understands, and ranks every page of your site.",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Logo Creation",
    desc: "Memorable, modern logos that capture your brand personality — delivered in all formats you'll ever need.",
    color: "primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to <span className="text-gradient">go digital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, affordable services designed to give your business a complete, professional online presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const isPrimary = s.color === "primary";
            return (
              <div
                key={i}
                className="reveal group relative glass-strong rounded-2xl p-7 shadow-card hover:shadow-elegant border border-white/60 hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Hover gradient glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${isPrimary ? "bg-gradient-primary" : "bg-gradient-secondary"}`} style={{ opacity: 0 }} />

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${isPrimary ? "bg-gradient-primary shadow-glow" : "bg-gradient-secondary shadow-glow-blue"}`}>
                  <s.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {s.desc}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isPrimary ? "bg-primary" : "bg-secondary"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
