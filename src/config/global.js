export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Prospectiva y escenarios futuros',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Prospectiva y escenarios futuro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Metodologías principales en prospectiva',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Escenarios normativos y exploratorios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Escenarios híbridos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diseño y análisis de escenarios futuros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Identificación de riesgos, oportunidades y tendencias globales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Principios fundamentales de la ISO 31000',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Definición operativa del riesgo en la ISO 31000',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Proceso de gestión del riesgo, según la ISO 31000',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Justificación de la gestión del riesgo con la ISO 31000',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Oportunidades y tendencias globales en el 2024',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'capacidad de ajustarse rápidamente a los cambios imprevistos del entorno.',
    },
    {
      termino: 'Estrategia',
      significado:
        'proceso de toma de decisiones coordinadas para alcanzar objetivos en un contexto dinámico.',
    },
    {
      termino: 'Estrategia emergente',
      significado:
        'estrategia que surge de manera espontánea en respuesta a situaciones imprevistas.',
    },
    {
      termino: 'Estrategia deliberada',
      significado:
        'estrategia planificada con objetivos definidos y recursos asignados.',
    },
    {
      termino: 'Feedback',
      significado:
        'proceso de retroalimentación para ajustar decisiones estratégicas con base en resultados obtenidos.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'identificación y mitigación de riesgos que pueden afectar el logro de objetivos.',
    },
    {
      termino: 'Incertidumbre',
      significado:
        'situación en la que no se puede prever con certeza el resultado de un evento.',
    },
    {
      termino: 'Innovación estratégica',
      significado:
        'uso de nuevas ideas o métodos para mejorar procesos y obtener ventajas competitivas.',
    },
    {
      termino: 'Pensamiento complejo',
      significado:
        'análisis que reconoce la ambigüedad e interdependencia entre múltiples factores.',
    },
    {
      termino: 'Pensamiento sistémico',
      significado:
        'enfoque que analiza las interrelaciones entre las partes de un sistema para comprender su funcionamiento global.',
    },
    {
      termino: 'Proactividad',
      significado: 'capacidad de anticiparse a cambios o problemas futuros.',
    },
    {
      termino: 'Resiliencia organizacional',
      significado:
        'capacidad de una organización para recuperarse y prosperar tras enfrentar adversidades.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'información recibida sobre el desempeño para realizar mejoras continuas.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'prácticas que buscan un equilibrio entre el desarrollo económico, social y ambiental.',
    },
    {
      termino: 'Toma de decisiones colaborativa',
      significado:
        'proceso que involucra a diversos actores en la toma de decisiones estratégicas.',
    },
    {
      termino: 'Toma de decisiones bajo incertidumbre',
      significado:
        'proceso de elegir opciones sin disponer de toda la información necesaria.',
    },
    {
      termino: 'VUCA',
      significado:
        'acrónimo de Volatilidad, Incertidumbre, Complejidad y Ambigüedad, que describe entornos dinámicos.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'característica que permite a una organización destacarse y superar a sus competidores.',
    },
    {
      termino: 'Visión',
      significado:
        'declaración que define el propósito y la dirección a largo plazo de una organización.',
    },
    {
      termino: 'Escenarios prospectivos',
      significado:
        'modelos que visualizan futuros posibles para guiar la planificación estratégica.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
