import Header from "../components/Header";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Services from "../components/Services";
import Consulting from "../components/Consulting";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Biography />
        <Services />
        <Consulting />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
