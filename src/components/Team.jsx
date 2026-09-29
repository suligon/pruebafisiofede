import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import heroPhoto from "../assets/hero-photo.png";
import { business } from "../data/content";

export default function Team() {
  const { t, lang } = useLang();

  return (
    <section id="equipo" className="section team">
      <div className="section__head">
        <h2>{t.team.title}</h2>
      </div>
      <motion.div
        className="team__card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <img src={heroPhoto} alt={business.team.name} className="team__photo" />
        <div>
          <h3>{business.team.name}</h3>
          <p className="team__role">
            {lang === "es" ? business.team.role.es : business.team.role.en}
          </p>
          <p>{t.team.cta}</p>
        </div>
      </motion.div>
    </section>
  );
}
