<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Escenarios normativos y exploratorios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color:#FFF8D5 ")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La construcción de escenarios es una de las herramientas más utilizadas en el análisis prospectivo. Este enfoque fue popularizado por Herman Kahn, pionero de los estudios de prospectiva en la RAND Corporation, durante la década de 1950, y más tarde desarrollado en instituciones como el Instituto de Prospectiva de París. Los escenarios se emplean para explorar futuros alternativos que permitan anticipar riesgos, identificar oportunidades y definir estrategias adaptativas (Kahn & Wiener, 1967).
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/26.png', alt='')
    p.mb-4 La metodología de escenarios no busca predecir un futuro único, sino visualizar caminos alternativos, para que las organizaciones puedan preparar respuestas estratégicas frente a la incertidumbre. Esta técnica es especialmente útil en entornos complejos, donde los factores económicos, sociales, tecnológicos y políticos, están en constante interacción.
      br
      br
      | #[b Los tipos de escenarios son:]
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.svg', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="1. Escenarios normativos ")
            p.mb-0 Los escenarios normativos parten de un futuro deseado o un conjunto de objetivos estratégicos. Su enfoque es definir las acciones necesarias para alcanzar ese futuro preferido. Estos escenarios no se limitan a lo que podría suceder, sino que establecen una visión clara de lo que se quiere lograr.
              br
              br
              | #[b Propósito.] Visualizar caminos estratégicos que conduzcan al futuro preferido.
              br
              br
              | #[b Ejemplo.] Una empresa diseña un escenario en el que alcanza la neutralidad de carbono en el 2050, mediante la inversión en energías renovables y la adopción de modelos de economía circular.
          div(titulo="2. Escenarios exploratorios ")
            p.mb-4 Los escenarios exploratorios examinan futuros posibles basados en el análisis de las condiciones actuales y las tendencias emergentes. A diferencia de los normativos, no están vinculados a un objetivo concreto. Buscan evaluar cómo diferentes fuerzas del entorno podrían  evolucionar y afectar a una organización, ayudando a identificar riesgos y preparar estrategias flexibles.
              br
              br
              |#[b Propósito.] Comprender cómo podrían desarrollarse múltiples futuros y preparar respuestas estratégicas adaptativas.
              br
              br
              |#[b Ejemplo.] Una empresa de tecnología construye tres escenarios:
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Optimista.] Adopción acelerada de inteligencia artificial en el mercado.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Pesimista.] Regulaciones más estrictas que frenan la innovación.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Tendencial.] Crecimiento moderado con adopción progresiva de nuevas tecnologías.
    p.mb-4 El proceso de construcción de escenarios es el siguiente:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/28.png', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-3(x="30.5%" y="57%" numero="+")
        .h5.mb-2 Identificación de variables claves
        p Se seleccionan las tendencias y factores que tienen mayor impacto en el futuro del sector o industria analizada.
      .tarjeta.bg-white.p-3(x="36.5%" y="34%" numero="+")
        .h5.mb-2 Definición de supuestos críticos
        p Se establecen las condiciones o incertidumbres críticas, que determinarán la evolución de los escenarios.
      .tarjeta.bg-white.p-3(x="49.5%" y="35%" numero="+")
        .h5.mb-2 Construcción de los escenarios
        p Se crean varios escenarios (optimista, pesimista, tendencial o híbrido), considerando las combinaciones posibles de las variables.
      .tarjeta.bg-white.p-3(x="63%" y="34%" numero="+")
        .h5.mb-2 Evaluación del impacto
        p Se analizan las consecuencias estratégicas de cada escenario y las posibles respuestas, para aprovechar oportunidades o mitigar riesgos.
      .tarjeta.bg-white.p-3(x="69.5%" y="57%" numero="+")
        .h5.mb-2 Diseño de estrategias
        p Las decisiones se alinean con los resultados del análisis, para garantizar que la organización esté preparada para cualquier evolución futura.
    p.mb-5 Y finalicemos con las ventajas, limitaciones y aplicaciones de la construcción de escenarios:
    .bg-full-width.bg-motivo.p-5.mb-5  
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Ventajas 
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Visión estratégica integral.] Permite a las organizaciones prepararse para múltiples futuros.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Reducción de la incertidumbre.] Al visualizar caminos alternativos, se mitigan los efectos de eventos inesperados.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Innovación y proactividad.] Fomenta la creatividad en la toma de decisiones, al explorar futuros disruptivos.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Mejora de la toma de decisiones.] Las estrategias se diseñan en función de escenarios robustos, garantizando una mayor adaptabilidad.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/29.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Limitaciones
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Complejidad en la construcción.] Requiere de un análisis detallado de múltiples variables e interacciones.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Recursos intensivos.] El proceso de diseño puede ser largo y costoso.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Incertidumbre residual.] A pesar de la preparación, siempre existirán factores imprevistos.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/30.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Aplicaciones
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Planificación gubernamental.] Preparación de estrategias para crisis económicas o desastres naturales.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Estrategia corporativa.] Anticipación de cambios en la regulación o en las preferencias del mercado.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Innovación tecnológica.] Visualización del impacto de nuevas tecnologías en un sector determinado.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/31.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Ejemplo real de escenarios en acción
            p.mb-0 Durante la pandemia del COVID-19, muchas empresas diseñaron escenarios para gestionar la incertidumbre del mercado. Un ejemplo destacado es el sector educativo, que desarrolló escenarios normativos centrados en la digitalización completa del aprendizaje, así como escenarios exploratorios sobre el retorno gradual a la presencialidad. Esta planificación permitió que las instituciones educativas adaptaran sus modelos de enseñanza rápidamente, independientemente de la evolución de la pandemia.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/32.png', alt='Texto que describa la imagen')
    .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #f8dcf6 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/33.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Los escenarios normativos y exploratorios son metodologías esenciales en el análisis prospectivo, permitiendo a las organizaciones visualizar futuros alternativos y diseñar estrategias adaptativas. La combinación de estos enfoques, junto con el uso de escenarios híbridos, ofrece una mayor flexibilidad y capacidad de respuesta frente a la incertidumbre. La correcta aplicación de esta metodología asegura que las organizaciones no solo se adapten a los cambios, sino que lideren el desarrollo del futuro deseado. 
        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") Abad, F. (Coord.). (2014). Dentro de 15 años: ¿Escenarios improbables?. LID Editorial España.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              | Velásquez, J., Gómez, A., & Parra, D. (2020). Análisis prospectivo del entorno global y su impacto en las organizaciones. Revista Espacios, 41(21), 29.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://medium.com/predict/normative-or-explorative-scenarios-use-the-control-compass-to-find-out-d903c4e7183c" target="_blank" rel="noopener noreferrer") Fergnani, A. (2021) ¿Escenarios normativos o exploratorios? Usa la "brújula de control" para descubrirlo. Medium. [Blog]

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-SB13lmAEcc" target="_blank" rel="noopener noreferrer") EOI. (2012, 10 de septiembre) Ana Morato. La prospectiva como herramienta para la planificación. el caso OPTI. [video] YouTube.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>
