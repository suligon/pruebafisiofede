import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Subraya progresivamente una palabra/frase clave cuando entra en el
// viewport al hacer scroll, con un trazo animado.
export default function AnimatedUnderline({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <span className="underline-word" ref={ref}>
      {children}
      <motion.span
        className="underline-word__stroke"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay }}
        aria-hidden="true"
      />
    </span>
  );
}
