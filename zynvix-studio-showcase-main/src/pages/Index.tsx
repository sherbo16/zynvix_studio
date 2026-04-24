import BackgroundFX from "@/components/zynvix/BackgroundFX";
import Navbar from "@/components/zynvix/Navbar";
import Hero from "@/components/zynvix/Hero";
import About from "@/components/zynvix/About";
import Services from "@/components/zynvix/Services";
import Process from "@/components/zynvix/Process";
import WhyUs from "@/components/zynvix/WhyUs";
import Contact from "@/components/zynvix/Contact";
import Footer from "@/components/zynvix/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
    <BackgroundFX />
    <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
