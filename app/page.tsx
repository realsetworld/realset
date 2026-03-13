import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyPartner from "@/components/WhyPartner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Highlights />
      <Services />
      <Process />
      <WhyPartner />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
