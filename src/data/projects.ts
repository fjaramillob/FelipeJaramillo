export interface Feature {
  iconName: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  type: string;
  status: 'Concepto' | 'En desarrollo' | 'En vivo' | 'Completado';
  accentColor: string;
  accentColorDim: string;
  accentColorBorder: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: Feature[];
  path: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'afterme',
    title: 'AfterMe',
    tagline: 'Tu legado digital, entregado cuando importa.',
    category: 'Producto digital',
    type: 'SaaS (futuro)',
    status: 'Concepto',
    accentColor: '#8B5CF6',
    accentColorDim: 'rgba(139, 92, 246, 0.12)',
    accentColorBorder: 'rgba(139, 92, 246, 0.3)',
    shortDescription:
      'Plataforma para programar mensajes, videos y contenido personal que se entregan en el futuro bajo condiciones definidas.',
    problem:
      'Las personas no tienen una forma estructurada ni segura de dejar mensajes, recuerdos o información importante para el futuro, especialmente en situaciones donde ya no podrán comunicarse directamente.',
    solution:
      'AfterMe permite programar y almacenar mensajes, videos y contenido personal que se entregan en momentos definidos o bajo ciertas condiciones, asegurando que el legado digital llegue de forma segura, privada y significativa.',
    features: [
      { iconName: 'Clock', title: 'Mensajes programados', description: 'Define exactamente cuándo y cómo se entrega cada mensaje o contenido.' },
      { iconName: 'Video', title: 'Cápsulas de video', description: 'Graba videos personales que quedarán protegidos hasta el momento de entrega.' },
      { iconName: 'Lock', title: 'Entrega segura', description: 'Condiciones definidas garantizan que el contenido llegue a quien corresponde.' },
      { iconName: 'Heart', title: 'Legado personal', description: 'Un espacio digital para preservar lo que realmente importa de tu historia.' },
    ],
    path: '/afterme',
    featured: true,
  },
  {
    id: 'pacto',
    title: 'PACTO',
    tagline: 'Acuerdos financieros claros entre personas.',
    category: 'Fintech',
    type: 'App / SaaS',
    status: 'Concepto',
    accentColor: '#10B981',
    accentColorDim: 'rgba(16, 185, 129, 0.12)',
    accentColorBorder: 'rgba(16, 185, 129, 0.3)',
    shortDescription:
      'Centraliza los acuerdos de dinero compartido con transparencia, recordatorios y un historial limpio que reduce conflictos.',
    problem:
      'La gestión de dinero compartido entre personas (parejas, familias, roommates) es desordenada, poco transparente y genera fricciones constantes por falta de claridad en acuerdos y pagos.',
    solution:
      'PACTO centraliza los acuerdos financieros en una plataforma digital, permitiendo definir compromisos, registrar gastos, automatizar recordatorios y mantener un historial claro que reduce conflictos y mejora la confianza.',
    features: [
      { iconName: 'FileText', title: 'Acuerdos digitales', description: 'Formaliza compromisos financieros de forma clara y consultable en cualquier momento.' },
      { iconName: 'BarChart2', title: 'Seguimiento de gastos', description: 'Registra y visualiza gastos compartidos con total transparencia entre las partes.' },
      { iconName: 'Bell', title: 'Recordatorios automáticos', description: 'Notificaciones inteligentes que mantienen a todos al día sin fricciones.' },
      { iconName: 'ClipboardList', title: 'Historial transparente', description: 'Un registro inmutable de todos los movimientos y acuerdos entre los participantes.' },
    ],
    path: '/pacto',
    featured: false,
  },
  {
    id: 'mostwater',
    title: 'Most Water',
    tagline: 'El agua como experiencia aspiracional.',
    category: 'Marca de consumo',
    type: 'Producto físico',
    status: 'Concepto',
    accentColor: '#38BDF8',
    accentColorDim: 'rgba(56, 189, 248, 0.12)',
    accentColorBorder: 'rgba(56, 189, 248, 0.3)',
    shortDescription:
      'Marca premium de agua en lata con identidad moderna, diseñada para posicionar el consumo de agua como una elección aspiracional y consciente.',
    problem:
      'El consumo de agua, a pesar de ser esencial, no tiene una propuesta de valor emocional o aspiracional, quedando relegado frente a bebidas con mayor identidad de marca.',
    solution:
      'Most Water redefine el consumo de agua a través de una marca premium, con diseño atractivo y posicionamiento aspiracional, transformando un producto básico en una elección consciente y socialmente valorada.',
    features: [
      { iconName: 'Sparkles', title: 'Branding premium', description: 'Identidad visual diferenciadora que comunica calidad y sofisticación desde el primer vistazo.' },
      { iconName: 'Package', title: 'Formato en lata', description: 'Diseño moderno y sustentable que rompe con el concepto tradicional del agua embotellada.' },
      { iconName: 'Award', title: 'Posicionamiento aspiracional', description: 'Estrategia de marca que eleva el agua al nivel de productos premium de estilo de vida.' },
      { iconName: 'Users', title: 'Lifestyle y contexto social', description: 'Pensado para espacios urbanos, eventos y contextos donde la imagen importa.' },
    ],
    path: '/mostwater',
    featured: false,
  },
  {
    id: 'exploraene',
    title: 'Explora Ene',
    tagline: 'Experiencias de viaje fuera de lo común.',
    category: 'Turismo',
    type: 'Negocio de servicios',
    status: 'En desarrollo',
    accentColor: '#F97316',
    accentColorDim: 'rgba(249, 115, 22, 0.12)',
    accentColorBorder: 'rgba(249, 115, 22, 0.3)',
    shortDescription:
      'Experiencias de viaje a destinos no tradicionales en Chile, curadas para grupos pequeños que buscan desconexión real y propuestas diferenciadas.',
    problem:
      'Las opciones de viajes tradicionales están saturadas, poco diferenciadas y no responden a personas que buscan experiencias auténticas, desconexión y exploración real.',
    solution:
      'Explora Ene ofrece experiencias de viaje a destinos no tradicionales, diseñadas para conectar con la naturaleza, salir de lo común y vivir propuestas cuidadosamente curadas para grupos pequeños.',
    features: [
      { iconName: 'Compass', title: 'Destinos no tradicionales', description: 'Lugares fuera del circuito turístico masivo, seleccionados por su autenticidad.' },
      { iconName: 'Star', title: 'Experiencias curadas', description: 'Cada propuesta está diseñada al detalle para garantizar calidad e impacto memorable.' },
      { iconName: 'Leaf', title: 'Desconexión y naturaleza', description: 'Propuestas que priorizan la reconexión con el entorno natural y la pausa real.' },
      { iconName: 'Users', title: 'Grupos pequeños', description: 'Experiencias diseñadas para grupos reducidos que favorecen la profundidad sobre la masividad.' },
    ],
    path: '/exploraene',
    featured: true,
  },
];
