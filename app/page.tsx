import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import CasoExito from "@/components/CasoExito";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Plan />
        <CasoExito />
        <Contacto />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
