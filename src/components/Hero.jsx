import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useLang } from "../context/LangContext";
import AnimatedUnderline from "./AnimatedUnderline";
import Physio3D from "./Physio3D";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

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

export default function Hero() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);

  // El objeto 3D reacciona de forma continua (no a saltos) a medida que el
  // héroe se desplaza fuera de la vista hacia "Nuestros servicios": rota,
  // escala levemente y el fondo del panel vira de blanco a azul-grisáceo.
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
  const panelBg = useTransform(
    smoothProgress,
    [0, 1],
    ["#eaf6fb", "#dbe6f2"]
  );

  return (
    <section id="inicio" className="section hero" ref={sectionRef}>
      <motion.div
        className="hero__copy"
        variants={reduced ? undefined : textStagger}
        initial={reduced ? undefined : "hidden"}
        animate={reduced ? undefined : "show"}
      >
        <motion.p className="eyebrow" variants={reduced ? undefined : textItem}>
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1 className="hero__title" variants={reduced ? undefined : textItem}>
          {t.hero.title1}
          <br />
          <AnimatedUnderline>{t.hero.title2}</AnimatedUnderline>
        </motion.h1>
        <motion.p className="hero__lead" variants={reduced ? undefined : textItem}>
          {t.hero.copy}
        </motion.p>
        <motion.div className="hero__actions" variants={reduced ? undefined : textItem}>
          <a href="#contacto" className="btn btn--solid">
            {t.hero.cta}
          </a>
          <a href="#servicios" className="btn btn--outline">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        style={reduced ? undefined : { backgroundColor: panelBg }}
      >
        <Physio3D rotate={reduced ? undefined : rotate} scale={reduced ? undefined : scale} />
      </motion.div>
    </section>
  );
}
