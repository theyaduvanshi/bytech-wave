import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Hero subtle tech motion layer */}
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
        {/* Animated SVG digital waves */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.18]" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(24, 95%, 62%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(210, 90%, 65%)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path fill="none" stroke="url(#wave1)" strokeWidth="1.5" d="M0,300 Q300,200 600,300 T1200,300">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0,300 Q300,200 600,300 T1200,300;
                      M0,300 Q300,400 600,300 T1200,300;
                      M0,300 Q300,200 600,300 T1200,300" />
          </path>
          <path fill="none" stroke="url(#wave1)" strokeWidth="1" opacity="0.6" d="M0,350 Q300,250 600,350 T1200,350">
            <animate attributeName="d" dur="14s" repeatCount="indefinite"
              values="M0,350 Q300,250 600,350 T1200,350;
                      M0,350 Q300,450 600,350 T1200,350;
                      M0,350 Q300,250 600,350 T1200,350" />
          </path>
          <path fill="none" stroke="url(#wave1)" strokeWidth="1" opacity="0.4" d="M0,400 Q300,300 600,400 T1200,400">
            <animate attributeName="d" dur="18s" repeatCount="indefinite"
              values="M0,400 Q300,300 600,400 T1200,400;
                      M0,400 Q300,500 600,400 T1200,400;
                      M0,400 Q300,300 600,400 T1200,400" />
          </path>
        </svg>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              top: `${15 + (i * 9) % 70}%`,
              left: `${(i * 13 + 7) % 90}%`,
              background: i % 2 === 0 ? "hsl(24 95% 62% / 0.3)" : "hsl(210 90% 65% / 0.3)",
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          />
        ))}

        {/* Light gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong shadow-soft mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Trusted by 100+ Local Businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Grow Your Business{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Online</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 9 Q 50 2, 100 6 T 198 4" stroke="url(#u1)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="u1" x1="0" x2="1">
                    <stop offset="0" stopColor="hsl(24 95% 62%)" />
                    <stop offset="1" stopColor="hsl(210 90% 65%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            with ByTech Wave
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Affordable digital solutions for local businesses — websites, Google presence, and content that turn visitors into customers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Get Started <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:+918290079076">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </Button>
          </div>

          {/* Offer card */}
          <div className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="glass-strong rounded-2xl px-6 py-5 shadow-elegant border border-primary/10 max-w-xl">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Limited Launch Offer</p>
                  <p className="font-display font-semibold text-base sm:text-lg leading-snug">
                    One-Page Website starting at just <span className="text-gradient-primary">₹6,000 / $64</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Includes FREE domain for 1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
