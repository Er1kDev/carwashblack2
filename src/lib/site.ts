/**
 * Datos del negocio en un solo lugar.
 * Cambia aquí el teléfono, dirección u horarios y se actualiza toda la página.
 */
export const site = {
  name: "Carwash Black",
  tagline: "Lavado y detailing premium en Linares",
  description:
    "Lavado de autos y motos premium en Linares: lavado full, interior profundo, protección y brillo, retiro y entrega a domicilio.",

  phoneDisplay: "+56 9 3957 0405",
  phoneRaw: "56939570405",

  address: "Linares, Región del Maule, Chile",

  coordinates: { lat: -35.845096586108134, lng: -71.57281023659525 },

  hours: [
    { days: "Lunes a Viernes", time: "18:00 - 20:00" },
    { days: "Sábados", time: "10:00 - 14:00" },
  ],

  social: {
    facebook: "https://web.facebook.com/profile.php?id=100086680427768",
    instagram: "https://www.instagram.com/carwash__black/",
    whatsapp: "https://wa.me/c/56939570405",
  },

  /** Historias destacadas de Instagram. */
  highlights: {
    clientes:
      "https://www.instagram.com/stories/highlights/17941251518483065/",
    horariosPrecios:
      "https://www.instagram.com/stories/highlights/17980547835047577/",
    retiros:
      "https://www.instagram.com/stories/highlights/17938514238241485/",
  },
} as const;

/** Link a WhatsApp con mensaje prellenado. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;

/** Link de indicaciones de Google Maps hacia el local. */
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${site.coordinates.lat},${site.coordinates.lng}`;
