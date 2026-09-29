import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { business } from "../data/content";

const icons = [
  // trazos gruesos y simples, coherentes con Flat Design
  "M12 2v20M2 12h20",
  "M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0",
  "M3 12h4l3-8 4 16 3-8h4",
  "M6 20V10M12 20V4M18 20v-6",
  "M4 4h16v16H4z",
  "M12 3l9 6-9 6-9-6 9-6zM3 15l9 6 9-6",
  "M5 12h14M12 5v14",
  "M4 6h16M4 12h16M4 18h10",
];

export default function Services() {
  const { t, lang } = useLang();

  return (
    <section id="servicios" className="section services">
      <div className="section__head">
        <h2>{t.services.title}</h2>
        <p>{t.services.subtitle}</p>
      </div>
      <ul className="services__grid">
        {business.services.map((s, i) => (
          <motion.li
            key={s.es}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
          >
            <svg viewBox="0 0 24 24" className="service-card__icon" aria-hidden="true">
              <path d={icons[i % icons.length]} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{lang === "es" ? s.es : s.en}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
