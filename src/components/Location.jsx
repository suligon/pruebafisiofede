import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { business } from "../data/content";

export default function Location() {
  const { t } = useLang();
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;

  return (
    <section id="ubicacion" className="section location">
      <motion.div
        className="location__info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <h2>{t.location.title}</h2>
        <p>{business.address}</p>

        <h3>{t.location.phoneLabel}</h3>
        <p>
          <a href={business.phoneHref}>{business.phone}</a>
        </p>

        <h3>{t.location.emailLabel}</h3>
        <p>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </motion.div>
      <div className="location__map">
        <iframe
          title={`Mapa de ${business.name}`}
          src={mapsSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
