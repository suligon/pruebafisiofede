import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

// Ilustración "3D" del fisioterapeuta con el tratamiento de luz de la
// referencia ORYZO: luz cálida difusa desde arriba-derecha, sombra de
// contacto, y una reacción de iluminación (sheen) al pasar el ratón además
// del paralaje por capas. `rotate`/`scale` llegan ligados al scroll.
export default function Physio3D({ rotate, scale }) {
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hoverTarget = useMotionValue(0);

  const spring = { stiffness: 90, damping: 18, mass: 0.9 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);
  const sheenOpacity = useSpring(hoverTarget, {
    stiffness: 140,
    damping: 20,
  });

  const layerBack = {
    x: useTransform(sx, [-1, 1], [-8, 8]),
    y: useTransform(sy, [-1, 1], [-6, 6]),
  };
  const layerMid = {
    x: useTransform(sx, [-1, 1], [-16, 16]),
    y: useTransform(sy, [-1, 1], [-12, 12]),
  };
  const layerFront = {
    x: useTransform(sx, [-1, 1], [-28, 28]),
    y: useTransform(sy, [-1, 1], [-20, 20]),
  };

  function handleMove(e) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 2);
    my.set(py * 2);
  }

  function handleEnter() {
    if (reduced) return;
    hoverTarget.set(1);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
    hoverTarget.set(0);
  }

  return (
    <motion.div
      className="physio3d"
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="img"
      aria-label="Ilustración de un fisioterapeuta dando indicaciones a un paciente"
      style={reduced ? undefined : { rotate, scale }}
    >
      <svg viewBox="0 0 520 520" className="physio3d__defs" aria-hidden="true">
        <defs>
          {/* Luz cálida difusa desde arriba-derecha sobre el círculo de fondo */}
          <radialGradient id="p3d-bg" cx="68%" cy="26%" r="78%">
            <stop offset="0%" stopColor="#f4fbff" />
            <stop offset="55%" stopColor="var(--color-oryzo-surface)" />
            <stop offset="100%" stopColor="var(--color-oryzo-surface-strong)" />
          </radialGradient>
          {/* Fisioterapeuta: azul claro con relieve suave */}
          <radialGradient id="p3d-blue" cx="66%" cy="22%" r="90%">
            <stop offset="0%" stopColor="#eaf6ff" />
            <stop offset="45%" stopColor="var(--color-oryzo-surface-strong)" />
            <stop offset="100%" stopColor="var(--color-oryzo-navy)" />
          </radialGradient>
          {/* Paciente: tonos casi blancos */}
          <radialGradient id="p3d-white" cx="66%" cy="22%" r="90%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f3fbf6" />
            <stop offset="100%" stopColor="var(--color-oryzo-green-soft)" />
          </radialGradient>
          {/* Sombra de contacto difusa */}
          <radialGradient id="p3d-contact" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(10,37,64,0.3)" />
            <stop offset="100%" stopColor="rgba(10,37,64,0)" />
          </radialGradient>
          {/* Sheen cálido que aparece en hover */}
          <radialGradient id="p3d-sheen" cx="72%" cy="18%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
      </svg>

      <motion.svg
        viewBox="0 0 520 520"
        className="physio3d__back"
        style={reduced ? undefined : layerBack}
      >
        <circle cx="260" cy="260" r="220" fill="url(#p3d-bg)" />
      </motion.svg>

      <svg viewBox="0 0 520 520" className="physio3d__shadow" aria-hidden="true">
        <ellipse cx="255" cy="472" rx="150" ry="26" fill="url(#p3d-contact)" />
      </svg>

      <motion.svg
        viewBox="0 0 520 520"
        className="physio3d__mid"
        style={reduced ? undefined : layerMid}
      >
        {/* Paciente: figura sentada plana con sombreado suave */}
        <g>
          <circle cx="340" cy="180" r="34" fill="url(#p3d-white)" />
          <rect x="300" y="220" width="80" height="140" rx="24" fill="url(#p3d-white)" />
          <rect x="290" y="330" width="46" height="110" rx="20" fill="url(#p3d-white)" />
          <rect x="356" y="330" width="46" height="110" rx="20" fill="url(#p3d-white)" />
        </g>
      </motion.svg>

      <motion.svg
        viewBox="0 0 520 520"
        className="physio3d__front"
        style={reduced ? undefined : layerFront}
      >
        {/* Fisioterapeuta: figura de pie, brazo guiando, sombreado suave */}
        <g>
          <circle cx="170" cy="140" r="38" fill="url(#p3d-blue)" />
          <rect x="126" y="184" width="88" height="150" rx="26" fill="url(#p3d-blue)" />
          <rect x="112" y="334" width="48" height="120" rx="22" fill="url(#p3d-blue)" />
          <rect x="180" y="334" width="48" height="120" rx="22" fill="url(#p3d-blue)" />
          {/* brazo indicando */}
          <rect
            x="206"
            y="200"
            width="120"
            height="26"
            rx="13"
            fill="url(#p3d-blue)"
            transform="rotate(-18 206 213)"
          />
          {/* filo de luz verde, detalle puntual al hover */}
          <motion.circle
            cx="170"
            cy="140"
            r="38"
            fill="none"
            stroke="var(--color-oryzo-green)"
            strokeWidth="2"
            style={{ opacity: reduced ? 0 : sheenOpacity }}
          />
        </g>
      </motion.svg>

      {!reduced && (
        <motion.svg
          viewBox="0 0 520 520"
          className="physio3d__sheen"
          style={{ opacity: sheenOpacity }}
          aria-hidden="true"
        >
          <circle cx="260" cy="260" r="220" fill="url(#p3d-sheen)" />
        </motion.svg>
      )}
    </motion.div>
  );
}
