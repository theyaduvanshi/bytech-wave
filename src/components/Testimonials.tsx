import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh Sharma",
    business: "Owner, Sharma Sweets & Bakery",
    text: "ByTech Wave built our website and set up our Google profile in under a week. Within a month, we started getting calls from customers who found us on Google. Honest pricing, great work.",
    initials: "RS",
  },
  {
    name: "Priya Mehta",
    business: "Founder, Bloom Boutique",
    text: "I was nervous about going online. They explained everything in simple words and delivered a website that genuinely looks premium. My online orders have doubled.",
    initials: "PM",
  },
  {
    name: "Dr. Anil Verma",
    business: "Dental Clinic",
    text: "The Google Business Profile optimization was a game-changer. New patients now find my clinic easily and book appointments. Highly recommend their services.",
    initials: "AV",
  },
  {
    name: "Sandeep Iyer",
    business: "Iyer Auto Garage",
    text: "Got my logo and one-page site under budget. The team was patient with my edits and delivered exactly what I asked for. Very professional.",
    initials: "SI",
  },
  {
    name: "Neha Kapoor",
    business: "Yoga Instructor",
    text: "Beautiful website, smooth experience, and they actually pick up the phone when I need help. ByTech Wave feels like a partner, not a vendor.",
    initials: "NK",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">local businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real owners who chose to grow with ByTech Wave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal group relative glass-strong rounded-2xl p-7 shadow-card border border-white/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="w-9 h-9 text-primary/20 mb-3" />

              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 flex-1">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-11 h-11 rounded-full bg-gradient-mix flex items-center justify-center text-white font-display font-semibold text-sm shadow-soft">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
