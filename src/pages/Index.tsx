import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    // Set page title
    document.title = "ByTech Wave | Affordable Digital Marketing & Web Services";

    // Handle meta description safely
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Affordable digital marketing services for local businesses. Websites, GBP optimization, and content creation starting at ₹6,000 / $64 with ByTech Wave."
    );
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;