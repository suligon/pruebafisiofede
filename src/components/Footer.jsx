import { useLang } from "../context/LangContext";
import logo from "../assets/logo.png";
import { business } from "../data/content";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logo} alt={`${business.name} — logo`} className="footer__logo" />
      <p>
        © {year} {business.name}. {t.footer.rights}
      </p>
      <p className="footer__contact">
        {business.address} · <a href={business.phoneHref}>{business.phone}</a> ·{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </footer>
  );
}
