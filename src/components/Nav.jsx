import { useLang } from "../context/LangContext";
import logo from "../assets/logo.png";
import { business } from "../data/content";

export default function Nav() {
  const { t, lang, toggleLang } = useLang();

  const links = [
    { href: "#servicios", label: t.nav.services },
    { href: "#nosotros", label: t.nav.about },
    { href: "#opiniones", label: t.nav.testimonials },
    { href: "#equipo", label: t.nav.team },
    { href: "#ubicacion", label: t.nav.location },
  ];

  return (
    <header className="nav">
      <a href="#inicio" className="nav__brand">
        <img src={logo} alt={`${business.name} — logo`} className="nav__logo" />
      </a>
      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav__actions">
        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={`Switch language / Cambiar idioma`}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <a href="#contacto" className="btn btn--solid">
          {t.nav.contact}
        </a>
      </div>
    </header>
  );
}
