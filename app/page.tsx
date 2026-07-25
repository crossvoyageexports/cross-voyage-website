import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import Certifications from "@/components/Certifications";
import GlobalPresence from "@/components/GlobalPresence";
import ExportProcess from "@/components/ExportProcess";
import GetQuote from "@/components/GetQuote";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Leadership />

      <Products />

      <WhyChoose />

      <Certifications />

      <GlobalPresence />

      <ExportProcess />

      <GetQuote />

      <Contact />

    </main>
  );
}