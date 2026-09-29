import { useState } from "react";
import { motion } from "motion/react";
import { useLang } from "../context/LangContext";

const CONTACT_RE = /^(\+?\d[\d\s-]{6,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

export default function ContactForm() {
  const { t } = useLang();
  const [values, setValues] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = t.form.required;
    if (!v.contact.trim()) e.contact = t.form.required;
    else if (!CONTACT_RE.test(v.contact.trim())) e.contact = t.form.invalidContact;
    if (!v.message.trim()) e.message = t.form.required;
    else if (v.message.trim().length < 10) e.message = t.form.minLength;
    return e;
  }

  function handleChange(field) {
    return (ev) => setValues((s) => ({ ...s, [field]: ev.target.value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Envío simulado: este front-end no dispara una llamada real de red.
      setSubmitted(true);
    }
  }

  return (
    <section id="contacto" className="section contact-form">
      <div className="section__head">
        <h2>{t.form.title}</h2>
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__field">
          <label htmlFor="name">{t.form.name}</label>
          <input
            id="name"
            type="text"
            required
            placeholder={t.form.namePlaceholder}
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="form__error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form__field">
          <label htmlFor="contact">{t.form.contact}</label>
          <input
            id="contact"
            type="text"
            required
            placeholder={t.form.contactPlaceholder}
            value={values.contact}
            onChange={handleChange("contact")}
            aria-invalid={!!errors.contact}
            aria-describedby={errors.contact ? "contact-error" : undefined}
          />
          {errors.contact && (
            <span id="contact-error" className="form__error" role="alert">
              {errors.contact}
            </span>
          )}
        </div>

        <div className="form__field">
          <label htmlFor="message">{t.form.message}</label>
          <textarea
            id="message"
            required
            minLength={10}
            rows={4}
            placeholder={t.form.messagePlaceholder}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="form__error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn--solid">
          {t.form.submit}
        </button>

        {submitted && (
          <motion.p
            className="form__success"
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.form.success}
          </motion.p>
        )}
      </form>
    </section>
  );
}
