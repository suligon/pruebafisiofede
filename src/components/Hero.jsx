import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useLang } from "../context/LangContext";
import AnimatedUnderline from "./AnimatedUnderline";
import Physio3D from "./Physio3D";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";
import { business } from "../data/content";

const textStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Layout "Product Reveal": full-bleed 100vh, tres columnas (heading /
// objeto 3D central / body copy), separadas por gutters de 18px — patrón
// adaptado de la referencia ORYZO, con la paleta clara de Clínica Avenida.
export default function Hero() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 10]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <section id="inicio" className="hero-reveal" ref={sectionRef}>
        <motion.div
          className="hero-reveal__grid"
          variants={reduced ? undefined : textStagger}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "show"}
        >
          <div className="hero-reveal__col hero-reveal__col--left">
            <motion.p
              className="oryzo-subheading hero-reveal__eyebrow"
              variants={reduced ? undefined : textItem}
            >
              {t.hero.eyebrow}
            </motion.p>
            <motion.h1
              className="oryzo-display hero-reveal__title"
              variants={reduced ? undefined : textItem}
            >
              {t.hero.title1}
              <br />
              <AnimatedUnderline>{t.hero.title2}</AnimatedUnderline>
            </motion.h1>
            <motion.div
              className="hero-reveal__actions"
              variants={reduced ? undefined : textItem}
            >
              <a href="#contacto" className="oryzo-btn oryzo-btn--pill">
                {t.hero.cta}
              </a>
              <a href="#servicios" className="oryzo-btn oryzo-btn--outline">
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-reveal__object"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          >
            <Physio3D
              rotate={reduced ? undefined : rotate}
              scale={reduced ? undefined : scale}
            />
          </motion.div>

          <div className="hero-reveal__col hero-reveal__col--right">
            <motion.p
              className="oryzo-body hero-reveal__lead"
              variants={reduced ? undefined : textItem}
            >
              {t.hero.copy}
            </motion.p>
            <motion.p
              className="hero-reveal__credit"
              variants={reduced ? undefined : textItem}
            >
              — {business.name}, {business.city}
            </motion.p>
          </div>
        </motion.div>
      </section>
      <div className="dashed-divider" aria-hidden="true" />
    </>
  );
}
