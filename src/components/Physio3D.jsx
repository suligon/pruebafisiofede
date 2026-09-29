import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

// Ilustración "3D" en Flat Design: figuras planas de trazo grueso,
// compuestas en capas con distinta profundidad. El paralaje con inercia
// (spring) al mover el ratón simula volumen sin usar sombras ni gradientes,
// igual que el portátil 3D de suligon.com.
export default function Physio3D() {
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const spring = { stiffness: 90, damping: 18, mass: 0.9 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

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

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      className="physio3d"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="img"
      aria-label="Ilustración de un fisioterapeuta dando indicaciones a un paciente"
    >
      <motion.svg
        viewBox="0 0 520 520"
        className="physio3d__back"
        style={reduced ? undefined : layerBack}
      >
        <circle cx="260" cy="260" r="220" fill="var(--color-cyan)" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 520 520"
        className="physio3d__mid"
        style={reduced ? undefined : layerMid}
      >
        {/* Paciente: figura sentada plana */}
        <g>
          <circle cx="340" cy="180" r="34" fill="var(--color-white)" />
          <rect x="300" y="220" width="80" height="140" rx="24" fill="var(--color-white)" />
          <rect x="290" y="330" width="46" height="110" rx="20" fill="var(--color-white)" />
          <rect x="356" y="330" width="46" height="110" rx="20" fill="var(--color-white)" />
        </g>
      </motion.svg>

      <motion.svg
        viewBox="0 0 520 520"
        className="physio3d__front"
        style={reduced ? undefined : layerFront}
      >
        {/* Fisioterapeuta: figura de pie, brazo guiando */}
        <g>
          <circle cx="170" cy="140" r="38" fill="var(--color-blue)" />
          <rect x="126" y="184" width="88" height="150" rx="26" fill="var(--color-blue)" />
          <rect x="112" y="334" width="48" height="120" rx="22" fill="var(--color-blue)" />
          <rect x="180" y="334" width="48" height="120" rx="22" fill="var(--color-blue)" />
          {/* brazo indicando */}
          <rect
            x="206"
            y="200"
            width="120"
            height="26"
            rx="13"
            fill="var(--color-blue)"
            transform="rotate(-18 206 213)"
          />
        </g>
      </motion.svg>
    </div>
  );
}
