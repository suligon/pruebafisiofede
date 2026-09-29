import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { business } from "../data/content";

export default function Testimonials() {
  const { t, lang } = useLang();

  return (
    <section id="opiniones" className="section testimonials">
      <div className="section__head">
        <h2>{t.testimonials.title}</h2>
        <p>{t.testimonials.subtitle}</p>
      </div>
      <ul className="testimonials__grid">
        {business.testimonials.map((tm, i) => (
          <motion.li
            key={tm.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <p className="testimonial-card__quote">
              “{lang === "es" ? tm.es : tm.en}”
            </p>
            <p className="testimonial-card__name">{tm.name}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
