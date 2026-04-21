import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="container-custom">
        <div className="reveal relative overflow-hidden rounded-3xl glass-strong border border-white/60 shadow-elegant p-10 lg:p-16">
          {/* Decorative gradient blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-blob" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-secondary opacity-20 blur-3xl animate-blob" style={{ animationDelay: "5s" }} aria-hidden="true" />

          <div className="relative text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Let's Get Started</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Grow Your Business <span className="text-gradient">Online?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Talk to us today and get a free consultation. No pressure, no jargon — just honest advice for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="tel:+918290079076">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="mailto:support@bytechwave.com">
                  Get Started Today <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available Mon–Sat</span>
              <span>📞 +91 8290079076</span>
              <span>✉ support@bytechwave.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
