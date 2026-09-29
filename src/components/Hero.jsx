import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import AnimatedUnderline from "./AnimatedUnderline";
import Physio3D from "./Physio3D";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="inicio" className="section hero">
      <div className="hero__copy">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero__title">
          {t.hero.title1}
          <br />
          <AnimatedUnderline>{t.hero.title2}</AnimatedUnderline>
        </h1>
        <p className="hero__lead">{t.hero.copy}</p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--solid">
            {t.hero.cta}
          </a>
          <a href="#servicios" className="btn btn--outline">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      >
        <Physio3D />
      </motion.div>
    </section>
  );
}
