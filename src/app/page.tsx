import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Paragraph from "@/components/Paragraph";
import services from "../app/services.json";
import WhyChoose from "@/components/Whychoose";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Paragraph/>
      {
        services.services.map((service, index) => (
          <Section key={index} index={index} title={service.title} sub={service.subDescription} subs={service.subs} />
        ))
      }
      <WhyChoose/>
      <Contact />
      <Footer />
    </div>
  );
}
