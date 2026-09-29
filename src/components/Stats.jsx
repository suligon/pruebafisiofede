import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { business } from "../data/content";

function Counter({ value, suffix = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.5 }}
      className="stat__value"
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  const { t } = useLang();

  const items = [
    { value: business.yearsExperience, suffix: "+", label: t.stats.years },
    { value: business.clinicsCount, suffix: "+", label: t.stats.clinics },
    { value: business.services.length, suffix: "", label: t.stats.services },
  ];

  return (
    <section className="section stats" aria-label="Estadísticas de confianza">
      <div className="stats__grid">
        {items.map((it) => (
          <div className="stat" key={it.label}>
            <Counter value={it.value} suffix={it.suffix} />
            <span className="stat__label">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
