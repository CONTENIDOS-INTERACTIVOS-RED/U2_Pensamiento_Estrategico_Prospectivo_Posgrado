export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Estrategia y pensamiento complejo',
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
        titulo:
          'Estrategia: definición y características en contextos complejos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pensamiento sistémico y pensamiento complejo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Características del pensamiento sistémico y del pensamiento complejo, en la estrategia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicaciones en la gestión estratégica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Importancia para los líderes y tomadores de decisiones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de la toma de decisiones en entornos inciertos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principales desafíos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Herramientas para la toma de decisiones estratégicas, en incertidumbre',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Importancia del <em>feedback</em> y la evaluación continua',
            hash: 't_3_3',
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
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
      referencia:
        'Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    },
    {
      referencia:
        '<em>Harpersbazaar</em>. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA.',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
    {
      referencia:
        'Áciedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
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
