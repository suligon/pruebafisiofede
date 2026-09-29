// Datos reales de Clínica Avenida (Burjassot, Valencia) — verificados en clinica-avenida.com
// Excepciones marcadas: años de experiencia y número de clínicas son los proporcionados
// directamente por el cliente (no coinciden con la web real, usados por instrucción explícita).

export const business = {
  name: "Clínica Avenida",
  address: "C/ Arturo Cervellera 10, Burjassot (Valencia)",
  city: "Burjassot",
  region: "Valencia",
  country: "España",
  phone: "622 773 236",
  phoneHref: "tel:+34622773236",
  email: "aaronfisio@hotmail.com",
  mapsQuery: "C/ Arturo Cervellera 10, 46100 Burjassot, Valencia",
  yearsExperience: 80,
  clinicsCount: 50,
  services: [
    { es: "Fisioterapia", en: "Physiotherapy" },
    { es: "Osteopatía", en: "Osteopathy" },
    { es: "Acupuntura", en: "Acupuncture" },
    { es: "Pilates terapéutico", en: "Therapeutic Pilates" },
    { es: "Diatermia", en: "Diathermy" },
    { es: "Fisioterapia a domicilio", en: "Home physiotherapy" },
    { es: "Liberación miofascial", en: "Myofascial release" },
    { es: "Método McKenzie", en: "McKenzie Method" },
  ],
  testimonials: [
    {
      name: "Remedios Calvo",
      es: "Profesional máximo en fisioterapia y osteopatía, mediante terapias manipulativas, y otras como diatermia o punción seca. Experto en pacientes amputados como es mi caso. Soy fiel a sus tratamientos y terapias porque me ayudan en mi vida diaria.",
      en: "A top professional in physiotherapy and osteopathy, using manipulative therapies and others such as diathermy or dry needling. An expert with amputee patients, which is my case. I stay loyal to his treatments because they help me in my daily life.",
    },
    {
      name: "Ludovic Daguet",
      es: "Aaron es mi osteópata y fisioterapeuta desde hace más de 13 años, y poco a poco fue conociendo a gran parte de mi familia…",
      en: "Aaron has been my osteopath and physiotherapist for more than 13 years, and little by little he got to know much of my family…",
    },
    {
      name: "Jose Vte",
      es: "Todo un profesional, con unas manos prodigiosas. Muy contento con el trato, formal y muy atento…",
      en: "A true professional, with remarkable hands. Very happy with the treatment — formal and very attentive…",
    },
    {
      name: "Cristian Batah",
      es: "He visitado al fisioterapeuta Aarón Castellanos en su clínica de Burjassot y he quedado muy satisfecho…",
      en: "I visited physiotherapist Aarón Castellanos at his Burjassot clinic and was very satisfied…",
    },
    {
      name: "Marian Candel",
      es: "Muy buen profesional, conoce a la perfección diferentes técnicas y metodologías para tratarte. Se adapta…",
      en: "A very good professional, who knows different techniques and methodologies perfectly. He adapts…",
    },
  ],
  team: {
    name: "Aarón Castellanos",
    role: { es: "Fisioterapeuta y CEO de Clínica Avenida", en: "Physiotherapist and CEO of Clínica Avenida" },
  },
  process: [
    { es: ["Pide una cita", "Llama, manda un email o acude a la clínica."], en: ["Book an appointment", "Call, send an email, or visit the clinic."] },
    { es: ["Obtén una consulta", "Te atenderemos con rapidez."], en: ["Get a consultation", "We'll see you promptly."] },
    { es: ["Conoce al terapeuta", "Máxima profesionalidad en cada sesión."], en: ["Meet your therapist", "Top professionalism at every session."] },
    { es: ["Disfruta de la terapia", "Las mejores y más modernas terapias."], en: ["Enjoy the therapy", "The best and most modern treatments."] },
  ],
};

export const dict = {
  es: {
    nav: { services: "Servicios", about: "Nosotros", testimonials: "Opiniones", team: "Equipo", location: "Ubicación", contact: "Contacto" },
    hero: {
      eyebrow: "Fisioterapia y osteopatía en Burjassot",
      title1: "Tu movimiento,",
      title2: "nuestra especialidad",
      copy: "Un equipo de profesionales colegiados dedicado a mejorar tu calidad de vida con tratamientos de fisioterapia, osteopatía, acupuntura y pilates.",
      cta: "Pide tu cita",
      ctaSecondary: "Ver servicios",
    },
    stats: {
      years: "años de experiencia",
      clinics: "clínicas en España",
      services: "especialidades",
    },
    services: {
      title: "Nuestros servicios",
      subtitle: "Tratamientos especializados adaptados a cada paciente.",
    },
    about: {
      title: "El poder curativo de la fisioterapia",
      copy: "Gracias a nuestros expertos conocimientos de fisioterapia y osteopatía, y a nuestros años de experiencia, ayudamos a cada paciente a recuperar su calidad de vida con un trato cercano y profesional.",
      point1: "Expertos terapeutas",
      point2: "Satisfacción garantizada",
    },
    testimonials: { title: "Testimonios", subtitle: "Conoce algunas de las opiniones de nuestros pacientes." },
    team: { title: "Nuestro equipo", cta: "Máxima profesionalidad y la mejor atención." },
    process: { title: "Sencillos pasos para obtener servicios de fisioterapia" },
    location: { title: "Nuestra dirección", emailLabel: "Nuestro email", phoneLabel: "Nuestro teléfono" },
    form: {
      title: "Concierta hoy mismo una cita",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      contact: "Teléfono o email",
      contactPlaceholder: "¿Cómo te contactamos?",
      message: "Cuéntanos tu caso",
      messagePlaceholder: "Describe brevemente tu dolencia o motivo de consulta (mínimo 10 caracteres)",
      submit: "Enviar solicitud",
      required: "Este campo es obligatorio.",
      minLength: "Escribe al menos 10 caracteres.",
      invalidContact: "Indica un teléfono o email válido.",
      success: "¡Gracias! Nos pondremos en contacto contigo lo antes posible.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    langToggleLabel: "English",
  },
  en: {
    nav: { services: "Services", about: "About", testimonials: "Testimonials", team: "Team", location: "Location", contact: "Contact" },
    hero: {
      eyebrow: "Physiotherapy and osteopathy in Burjassot",
      title1: "Your movement,",
      title2: "our specialty",
      copy: "A team of licensed professionals dedicated to improving your quality of life with physiotherapy, osteopathy, acupuncture, and pilates treatments.",
      cta: "Book an appointment",
      ctaSecondary: "View services",
    },
    stats: {
      years: "years of experience",
      clinics: "clinics across Spain",
      services: "specialties",
    },
    services: {
      title: "Our services",
      subtitle: "Specialized treatments tailored to every patient.",
    },
    about: {
      title: "The healing power of physiotherapy",
      copy: "Thanks to our expert knowledge of physiotherapy and osteopathy, and our years of experience, we help every patient regain their quality of life with a close, professional approach.",
      point1: "Expert therapists",
      point2: "Guaranteed satisfaction",
    },
    testimonials: { title: "Testimonials", subtitle: "Read what our patients say about us." },
    team: { title: "Our team", cta: "Top professionalism and the best care." },
    process: { title: "Simple steps to get physiotherapy services" },
    location: { title: "Our address", emailLabel: "Our email", phoneLabel: "Our phone" },
    form: {
      title: "Book your appointment today",
      name: "Name",
      namePlaceholder: "Your full name",
      contact: "Phone or email",
      contactPlaceholder: "How should we reach you?",
      message: "Tell us about your case",
      messagePlaceholder: "Briefly describe your condition or reason for consultation (minimum 10 characters)",
      submit: "Send request",
      required: "This field is required.",
      minLength: "Please write at least 10 characters.",
      invalidContact: "Enter a valid phone number or email.",
      success: "Thank you! We'll get back to you as soon as possible.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    langToggleLabel: "Español",
  },
};
