import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { business } from "../data/content";

export default function Process() {
  const { t, lang } = useLang();

  return (
    <section className="section process" aria-label={t.process.title}>
      <div className="section__head">
        <h2>{t.process.title}</h2>
      </div>
      <ol className="process__grid">
        {business.process.map((step, i) => {
          const [title, copy] = lang === "es" ? step.es : step.en;
          return (
            <motion.li
              key={title}
              className="process-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span className="process-card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
