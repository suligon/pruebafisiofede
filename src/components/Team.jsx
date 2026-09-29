import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "../context/LangContext";
import heroPhoto from "../assets/hero-photo.png";
import { business } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

export default function Team() {
  const { t, lang } = useLang();
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section id="equipo" className="section team">
      <div className="section__head">
        <h2>{t.team.title}</h2>
      </div>
      <motion.div
        className="team__card"
        ref={wrapRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="team__photo-wrap">
          <motion.img
            src={heroPhoto}
            alt={business.team.name}
            className="team__photo"
            style={reduced ? undefined : { y }}
          />
        </div>
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
