import { CheckCircle2, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left visual */}
          <div className="reveal relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-mix opacity-20 blur-2xl animate-blob" />
              <div className="relative h-full glass-strong rounded-3xl p-8 shadow-elegant border border-white/60 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-soft rounded-2xl p-5 hover:scale-105 transition-transform">
                    <div className="text-3xl font-display font-bold text-gradient-primary">100+</div>
                    <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
                  </div>
                  <div className="bg-secondary-soft rounded-2xl p-5 hover:scale-105 transition-transform">
                    <div className="text-3xl font-display font-bold text-secondary">5+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                  </div>
                  <div className="bg-secondary-soft rounded-2xl p-5 hover:scale-105 transition-transform">
                    <div className="text-3xl font-display font-bold text-secondary">200+</div>
                    <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
                  </div>
                  <div className="bg-primary-soft rounded-2xl p-5 hover:scale-105 transition-transform">
                    <div className="text-3xl font-display font-bold text-gradient-primary">24/7</div>
                    <div className="text-sm text-muted-foreground mt-1">Support</div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-2xl bg-gradient-soft border border-white/60">
                  <p className="text-sm font-medium text-foreground/80 italic">
                    "We help small businesses get found, get trusted, and get customers — online."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="reveal">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About ByTech Wave</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Digital growth, made <span className="text-gradient">simple</span> for local businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ByTech Wave is a digital marketing studio built around one idea: every small business deserves a strong online presence — without the agency price tag. We craft modern websites, optimize your Google profile, and build content that brings real customers to your door.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, text: "Built for small businesses & startups — practical, not flashy." },
                { icon: Zap, text: "Fast turnaround with transparent, affordable pricing." },
                { icon: CheckCircle2, text: "End-to-end support — from domain to ranking on Google." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-mix flex items-center justify-center shrink-0 shadow-soft">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-foreground/80 pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
