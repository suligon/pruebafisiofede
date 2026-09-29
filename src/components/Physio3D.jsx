import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

// Ilustración "3D" en Flat Design con sombreado suave tipo subsurface-
// scattering (gradientes radiales, luz difusa) + sombra de contacto, en
// capas con paralaje al mover el ratón. `rotate` y `scale` llegan como
// motion values ligados al scroll (ver Hero.jsx) para que el conjunto
// reaccione de forma continua, no con una animación de entrada estática.
export default function Physio3D({ rotate, scale }) {
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
    <motion.div
      className="physio3d"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="img"
      aria-label="Ilustración de un fisioterapeuta dando indicaciones a un paciente"
      style={reduced ? undefined : { rotate, scale }}
    >
      <svg viewBox="0 0 520 520" className="physio3d__defs" aria-hidden="true">
        <defs>
          {/* Luz difusa superior-izquierda sobre el círculo de fondo */}
          <radialGradient id="p3d-bg" cx="38%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#5fd6ec" />
            <stop offset="55%" stopColor="var(--color-cyan)" />
            <stop offset="100%" stopColor="#0090ab" />
          </radialGradient>
          {/* Sombreado tipo subsurface-scattering sobre el fisioterapeuta */}
          <radialGradient id="p3d-blue" cx="35%" cy="25%" r="85%">
            <stop offset="0%" stopColor="#3f8fce" />
            <stop offset="45%" stopColor="var(--color-blue)" />
            <stop offset="100%" stopColor="#063a63" />
          </radialGradient>
          {/* Sombreado suave sobre el paciente (tonos casi blancos) */}
          <radialGradient id="p3d-white" cx="35%" cy="25%" r="85%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#eaf6fb" />
            <stop offset="100%" stopColor="#c7e3ee" />
          </radialGradient>
          {/* Sombra de contacto difusa debajo de las figuras */}
          <radialGradient id="p3d-contact" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(6,40,68,0.38)" />
            <stop offset="100%" stopColor="rgba(6,40,68,0)" />
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
        </g>
      </motion.svg>
    </motion.div>
  );
}
