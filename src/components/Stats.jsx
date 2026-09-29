import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useLang } from "../context/LangContext";
import { business } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, value, reduced, count]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.5 }}
      className="stat__value"
    >
      {display}
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
