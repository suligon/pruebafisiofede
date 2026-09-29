import { useEffect } from "react";
import { LangProvider, useLang } from "./context/LangContext";
import { business } from "./data/content";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Process from "./components/Process";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollRail from "./components/ScrollRail";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "opiniones", label: "Opiniones" },
  { id: "equipo", label: "Equipo" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "contacto", label: "Contacto" },
];

function JsonLd() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "PhysicalTherapy",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "C/ Arturo Cervellera 10",
        addressLocality: business.city,
        addressRegion: business.region,
        addressCountry: "ES",
      },
      telephone: business.phone,
      email: business.email,
      url: "https://clinica-avenida.com/",
    };

    let script = document.getElementById("ld-json-business");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json-business";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, []);

  return null;
}

function DocumentLang() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function Page() {
  return (
    <>
      <DocumentLang />
      <JsonLd />
      <a href="#inicio" className="skip-link">
        Saltar al contenido
      </a>
      <ScrollRail sections={sections} />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <Team />
        <Process />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
