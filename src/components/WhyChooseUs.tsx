import { Wallet, Rocket, Headphones, ShieldCheck, Smartphone, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Wallet, title: "Affordable Pricing", desc: "Premium quality without enterprise costs. Plans designed around small business budgets." },
  { icon: Rocket, title: "Fast Delivery", desc: "Most websites go live within 5–7 days. We respect your time and momentum." },
  { icon: Headphones, title: "Personal Support", desc: "Talk to a real human, not a ticket bot. Direct WhatsApp & call support." },
  { icon: ShieldCheck, title: "Built to Last", desc: "Modern, secure tech stack with clean code that scales as your business grows." },
  { icon: Smartphone, title: "Mobile-First", desc: "Every site looks stunning on phone, tablet, and desktop — where your customers actually are." },
  { icon: TrendingUp, title: "Results-Driven", desc: "We focus on what matters: visibility on Google, calls to your number, and real growth." },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-20 lg:py-28 relative">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The partner your business <span className="text-gradient">deserves</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Six honest reasons local businesses choose ByTech Wave over bigger, slower agencies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="reveal group flex gap-4 p-6 rounded-2xl glass-strong border border-white/60 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-soft border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-primary transition-all duration-300">
                  <r.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1.5">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
