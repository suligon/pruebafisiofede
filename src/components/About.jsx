import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "../context/LangContext";
import AnimatedUnderline from "./AnimatedUnderline";
import treatmentPhoto from "../assets/treatment-photo.jpg";
import { business } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

export default function About() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef(null);

  // Parallax sutil: la imagen se desplaza a una velocidad ligeramente
  // distinta que el texto al hacer scroll, para dar sensación de profundidad.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <section id="nosotros" className="section about" ref={wrapRef}>
      <div className="about__image-wrap">
        <motion.img
          src={treatmentPhoto}
          alt={`Fisioterapeuta tratando a un paciente en ${business.name}`}
          className="about__image"
          style={reduced ? undefined : { y }}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="about__copy">
        <h2>
          <AnimatedUnderline>{t.about.title}</AnimatedUnderline>
        </h2>
        <p>{t.about.copy}</p>
        <ul className="about__points">
          <li>{t.about.point1}</li>
          <li>{t.about.point2}</li>
        </ul>
      </div>
    </section>
  );
}
