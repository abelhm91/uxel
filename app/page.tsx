import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import Portfolio from "@/components/Portfolio";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Servicios />
        <Proceso />
        <Portfolio />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
