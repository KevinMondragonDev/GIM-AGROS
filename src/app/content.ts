/**
 * Contenido del sitio. Todo el texto editable vive aquí para que
 * actualizarlo no requiera tocar las plantillas.
 */

// TODO: completar teléfono, WhatsApp y ubicación cuando estén disponibles.
// Los campos vacíos no se muestran en la página.
export const CONTACT = {
  email: 'gimagrosweb@gmail.com',
  phone: '',
  /** Número en formato internacional sin "+" ni espacios, p. ej. 5213312345678 */
  whatsapp: '',
  location: '',
  /**
   * Clave pública de Web3Forms (https://web3forms.com) para gimagrosweb@gmail.com.
   * Mientras esté vacía, el formulario abre la app de correo del visitante.
   */
  web3formsKey: '00188a12-fd77-40ca-a769-e6773dd3d8e0',
};

export const NAV_LINKS = [
  { id: 'empresa', label: 'Empresa' },
  { id: 'proposito', label: 'Misión y visión' },
  { id: 'valores', label: 'Valores' },
  { id: 'contacto', label: 'Contacto' },
] as const;

export const HERO_FACTS = [
  'Comercialización de insumos agrícolas',
  'Atención adaptada a cada productor',
  'Relaciones comerciales duraderas',
];

export const ABOUT_PILLARS = ['Calidad en el servicio', 'Confianza comercial', 'Relaciones duraderas'];

export const MISSION =
  'Contribuir al desarrollo del sector agrícola a través de la comercialización de insumos y una atención profesional, cercana y comprometida con nuestros clientes.';

export const VISION =
  'Consolidarnos como una empresa reconocida por su confiabilidad, profesionalismo y compromiso con el crecimiento del sector agrícola.';

export const VALUES = [
  {
    name: 'Confianza',
    text: 'Construimos relaciones transparentes y duraderas.',
  },
  {
    name: 'Compromiso',
    text: 'Trabajamos con responsabilidad para atender las necesidades de nuestros clientes.',
  },
  {
    name: 'Profesionalismo',
    text: 'Promovemos una atención clara, seria y orientada a soluciones.',
  },
  {
    name: 'Calidad',
    text: 'Buscamos mantener altos estándares en nuestros procesos comerciales y de servicio.',
  },
  {
    name: 'Cercanía',
    text: 'Valoramos el contacto directo con quienes trabajan diariamente en el campo.',
  },
];

export const INTEREST_OPTIONS = [
  'Información sobre insumos',
  'Cotización',
  'Quiero ser cliente',
  'Otro motivo',
];

/** Fotografías de Unsplash (licencia Unsplash: uso comercial gratuito). */
export const PHOTO_CREDITS = [
  { author: 'Bernd Dittrich', url: 'https://unsplash.com/photos/dlhzCetYszo' },
  { author: 'Jan Kopřiva', url: 'https://unsplash.com/photos/LTMaAwxanGk' },
  { author: 'James Baltz', url: 'https://unsplash.com/photos/jAt6cN6zl8M' },
];
