import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

// Punto guía que recorre un carril vertical fijo marcando el progreso de
// scroll y la sección activa — inspirado en el indicador de la web de Suligon.
export default function ScrollRail({ sections }) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });
  const markerTop = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const [active, setActive] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <nav className="scroll-rail" aria-label="Progreso de la página">
      <div className="scroll-rail__track">
        <motion.div
          className="scroll-rail__fill"
          style={{ scaleY: smoothProgress }}
        />
        <motion.div
          className="scroll-rail__marker"
          style={{ top: markerTop }}
          aria-hidden="true"
        />
      </div>
      <ul className="scroll-rail__dots">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`scroll-rail__dot ${i === active ? "is-active" : ""}`}
              aria-current={i === active ? "true" : undefined}
            >
              <span className="scroll-rail__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
