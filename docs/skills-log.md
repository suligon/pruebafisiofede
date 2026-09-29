# Registro de estilos aplicados

| Fecha | Proyecto | Fingerprint | Skills aplicadas | Motivo |
|---|---|---|---|---|
| 2026-09-29 | Clínica Avenida (Burjassot, Valencia) | Flat Design (azul #0B5FA5 / cian #00B4D8 / blanco) + elemento 3D de firma (fisioterapeuta guiando a un paciente, ilustración en capas con paralaje/inercia) + subrayado animado de palabras clave al hacer scroll + punto guía sobre carril vertical | review-animations, impeccable (audit/detect), web-quality-audit, animation-vocabulary | Cliente pidió Flat Design de la Style Wall + elemento 3D de firma para transmitir profesionalidad y minimalismo. Estilo dado directamente por el cliente, sin pasar por Fase -1/1. |
| 2026-09-29 | Clínica Avenida — iteración 2 | Nav en cápsula estilo Apple + cards de servicios/testimonios con hover (scale+shadow) — de la iteración anterior. Esta iteración: shading tipo subsurface-scattering + sombra de contacto en el hero 3D, reacción continua al scroll (rotate/scale/bg vía useScroll+useTransform, inspirado en la lógica de sixb-dentaire.fr sin copiar su diseño), stagger en el texto del hero, parallax en imagen de "About" y foto de "Equipo", count-up en estadísticas, hover premium en botones, sombras suaves en cards | impeccable (detect), verificación manual equivalente a review-animations/web-quality-audit (no invocables por modelo) | Cliente pidió más realismo en el 3D con referencia técnica concreta (sixb-dentaire.fr), más movimientos de scroll y pulido general premium. De paso se corrigió un bug preexistente: las secciones quedaban ocultas bajo el nav sticky al navegar por anclas (fix: `scroll-margin-top` en `.section`). |

## Notas de datos

- Datos reales verificados en clinica-avenida.com: dirección, teléfono, email, servicios, logo, fotos y 5 testimonios.
- Datos proporcionados directamente por el cliente y usados tal cual pese a no coincidir con la web real de la clínica: "80 años de experiencia" y "+50 clínicas en España" (instrucción explícita del cliente de priorizar sus datos sobre los encontrados).
- Formulario de contacto: validación de mínimo 10 caracteres en el mensaje, campos obligatorios, sin envío real de red (mock local).
