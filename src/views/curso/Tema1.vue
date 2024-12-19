<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Prospectiva y escenarios futuro'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden.bg-tema-1
    p.mb-4 Para comenzar con el estudio de esta temática, lo invitamos a ver el siguiente video:
    .bg-full-width.bg-motivo.p-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Deconstruyendo Futuros - Documental sobre Prospectiva
                  p IAEN Universidad. (2022). Deconstruyendo Futuros - Documental sobre Prospectiva (video). YouTube. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Metodologías principales en prospectiva

    p.mb-4 Lo invitamos a conocer algunas de las principales metodologías.
    h3 Método Delphi
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="1. Origen y fundamento científico ")
            p.mb-0 El método Delphi fue desarrollado en la década de 1950 por Olaf Helmer y Norman Dalkey, investigadores de la RAND Corporation, con el objetivo de mejorar la precisión de las previsiones mediante un consenso iterativo de expertos. Originalmente, fue utilizado en estudios militares para anticipar desarrollos tecnológicos y escenarios estratégicos de largo plazo. Su éxito inicial, lo llevó a ser aplicado en una amplia variedad de campos, desde la educación y la tecnología, hasta la economía y la política. (Helmer, 1967)
          div(titulo="2. Definición y Propósito")
            p.mb-0 El método Delphi es una técnica de previsión estructurada, basada en la consulta anónima a un grupo de expertos, cuya opinión se solicita en varias rondas sucesivas. Su objetivo principal es el de alcanzar un consenso informado sobre eventos futuros o tendencias emergentes, minimizando los sesgos individuales o grupales. Cada ronda permite ajustar las respuestas de los expertos, incorporando nueva información o reconsiderando su evaluación, a partir del conocimiento colectivo generado.
    .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #f8dcf6 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/5.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Este método es #[b particularmente útil] cuando se enfrentan problemas complejos o se requiere un análisis de futuro, en situaciones con un alto grado de incertidumbre.
    p.mb-4 Conozcamos cómo es la estructura del proceso Delphi:
    .bg-full-width.bg-motivo.p-5.mb-5  
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Selección de expertos
            p Se conforma un panel multidisciplinario de especialistas en el tema de estudio. La diversidad de perspectivas, mejora la calidad del análisis.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/6.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Primera ronda
            p Los expertos responden un cuestionario inicial con preguntas abiertas o cerradas, sobre un evento futuro o tema específico.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/7.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Análisis y retroalimentación
            p Se recopilan las respuestas y se generan resúmenes estadísticos y cualitativos. Esta información se envía a los participantes, para su revisión.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/8.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Segundas y sucesivas rondas
            p Los expertos ajustan sus respuestas en función de los resultados y comentarios recibidos  en la ronda anterior. El proceso se repite hasta que se alcanza un consenso o estabilidad, en las opiniones.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/9.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Informe final
            p Se presenta un informe con las conclusiones consensuadas, indicando las tendencias o escenarios más probables, identificados durante el proceso.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/10.png', alt='Texto que describa la imagen')
    p.mb-4 Y ahora, sus ventajas, limitaciones y aplicaciones:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.png', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Ventajas ").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Reducción del sesgo grupal.] El anonimato de los participantes, evita la influencia de jerarquías o presiones sociales.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Visión multidisciplinaria.] La participación de expertos en diversas áreas, enriquece el análisis.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Iteración y refinamiento.] Las rondas sucesivas, permiten ajustar opiniones y mejorar la precisión del consenso.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Adaptabilidad.] Puede aplicarse en diversos contextos, desde predicciones tecnológicas, hasta la planificación educativa.
          div(titulo="Limitaciones").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Tiempo y recursos.] El proceso puede ser largo y requerir múltiples iteraciones.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Selección de expertos.] La calidad del resultado depende de la adecuada selección del panel de expertos.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Dependencia de la participación.] Si los expertos no colaboran activamente, el proceso puede verse afectado.
          div(titulo="Aplicaciones").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Tecnología y ciencia.] Anticipación de desarrollos tecnológicos emergentes.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Educación.] Diseño de futuros escenarios educativos o planificación curricular.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Economía y finanzas.] Previsión de cambios macroeconómicos y tendencias de mercado.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Política pública.] Análisis de riesgos sociales y desarrollo de estrategias a largo plazo.
          div(titulo="Ejemplo de uso ").p-3
            p.mb-0 Un ejemplo reciente del uso de Delphi, es su aplicación en la pandemia del COVID-19, donde varios gobiernos y organizaciones utilizaron esta técnica para anticipar los impactos económicos y sociales del confinamiento. Un panel de expertos en salud pública, economía y ciencias sociales, participó en varias rondas para identificar los escenarios más probables de recuperación post-pandemia y proponer estrategias para mitigar los efectos negativos.
    .bg-color-1.p-4.mb-5(data-aos="fade-left" style="background-color: #fff8d5 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/12.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El método Delphi es una herramienta poderosa para la construcción de consenso y previsión estratégica, especialmente en situaciones donde la incertidumbre es alta y las decisiones deben tomarse en función de múltiples perspectivas. Su capacidad para minimizar los sesgos y fomentar la participación interdisciplinaria lo convierte en una opción ideal para escenarios de alta complejidad. 
    h3 Análisis PESTEL
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Origen y fundamento científico" :icono="require('@/assets/curso/temas/icono.svg')")(style='background-color:#f4f4f4 ')
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/13.png', alt='')
          .col-md-7
            h4 Origen y fundamento científico
            p El análisis PESTEL es una metodología derivada del enfoque sistémico para la gestión estratégica, que surgió como una evolución del análisis PEST (Político, Económico, Social y Tecnológico). Posteriormente, se añadieron los factores Ecológicos y Legales, lo que llevó a su forma actual. Este marco fue popularizado por académicos como Francis Aguilar (1967) y se utiliza para identificar y evaluar las fuerzas macroambientales que afectan a una organización o sector.
              br
              br
              |El análisis PESTEL proporciona una visión integral del entorno externo, permitiendo comprender cómo los cambios en diversas áreas impactan en las operaciones de una empresa. Es una herramienta muy útil para identificar riesgos estratégicos y oportunidades emergentes a partir de factores globales que suelen ser ajenos al control directo de la organización.
      .py-4.py-md-5(titulo="Definición y propósito" :icono="require('@/assets/curso/temas/icono.svg')")(style='background-color: #f4f4f4')
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/14.png', alt='')
          .col-md-7
            h4 Definición y propósito
            p El análisis PESTEL evalúa los factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales, que influyen en el desempeño de una organización. Su propósito es proporcionar una visión amplia del entorno para que ayude a las organizaciones a identificar tendencias claves y prepararse para cambios futuros. Esta herramienta permite diseñar estrategias alineadas con las dinámicas externas, asegurando que las decisiones tomadas hoy, se ajusten a las condiciones del mañana. (Boada & Cardona Montoya, 2020)
    p.mb-4 Los componentes del análisis PESTEL, son:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="1. Factores Políticos").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Estabilidad gubernamental y cambios en el liderazgo.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Políticas fiscales, arancelarias y comerciales.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Impacto de las regulaciones y tratados internacionales.
          div(titulo="2. Factores Económicos ").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Tendencias de crecimiento económico y tasas de inflación.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Fluctuaciones del tipo de cambio y acceso al crédito.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Condiciones del mercado laboral y poder adquisitivo.
          div(titulo="3. Factores Sociales ").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Cambios en los valores culturales y comportamientos de consumo.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Crecimiento demográfico y migración.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Niveles de educación y bienestar social.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/15.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.png', alt='')
      .col-lg-8 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="4. Factores Tecnológicos").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Innovaciones tecnológicas emergentes y digitalización.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Inversión en investigación y desarrollo.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Disrupción de industrias por nuevas tecnologías.
          div(titulo="5. Factores Ecológicos ").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Regulaciones ambientales y políticas de sostenibilidad.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Impacto del cambio climático en las operaciones.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Tendencias hacia energías limpias y economía circular.
          div(titulo="6. Factores Legales ").p-3
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Cambios en normativas laborales y de protección al consumidor.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Cumplimiento regulatorio y riesgos legales.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Políticas de privacidad y protección de datos.
    p.mb-4 Y el proceso es:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/17.png" alt="")
          .custom-image-card__text.p-4.text-center
            h4.mb-2 Identificación de los factores claves
            p.mb-0 Se recopila información relevante de cada una de las áreas PESTEL, en relación con el sector o industria.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/18.png" alt="")
          .custom-image-card__text.p-4.text-center
            h4.mb-2 Evaluación del impacto
            p.mb-0 Se analizan los efectos positivos y negativos que estos factores podrían tener sobre la organización.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/19.png" alt="")
          .custom-image-card__text.p-4.text-center
            h4.mb-2 Priorización de riesgos y oportunidades
            p.mb-0 Se identifican los elementos que requieren mayor atención, en la planificación estratégica.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/20.png" alt="")
          .custom-image-card__text.p-4.text-center
            h4.mb-2 Diseño de estrategias
            p.mb-0 Las decisiones estratégicas se alinean con los resultados del análisis, para aprovechar oportunidades y mitigar riesgos.
    p.mb-4 Finalicemos con sus ventajas, limitaciones y aplicaciones:
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
                p.mb-0 #[b Visión integral.] Ofrece una perspectiva amplia del entorno externo y sus posibles efectos.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Identificación de riesgos y oportunidades.] Permite anticipar cambios que podrían impactar en la organización.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Orientación estratégica.] Facilita la alineación de las estrategias, con las dinámicas globales.
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Adaptabilidad.] Se puede aplicar a organizaciones de cualquier sector y tamaño.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/21.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Limitaciones
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Dependencia de la calidad de la información. Un análisis incorrecto o basado en datos incompletos, puede llevar a decisiones erróneas.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Naturaleza dinámica. Dado que el entorno cambia rápidamente, el análisis PESTEL debe ser actualizado con frecuencia.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Enfoque externo. No considera factores internos de la organización, por lo que debe complementarse con otras herramientas, como el análisis FODA.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Aplicaciones
            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Estrategia empresarial.] Identificación de oportunidades de crecimiento y mitigación de riesgos regulatorios.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Planificación de mercados internacionales.] Evaluación de la viabilidad de ingresar a nuevos mercados.

            .row.justify-content-center.align-items-center.mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Sostenibilidad y RSC.] Identificación de regulaciones ambientales y alineación con prácticas sostenibles.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Ejemplo de uso 
            p Una empresa de energías renovables aplica el análisis PESTEL para identificar regulaciones ambientales que incentiven  el uso de fuentes energéticas limpias. El análisis revela que la legislación favorece la inversión en energías solares y eólicas, pero también destaca riesgos asociados a cambios en los subsidios gubernamentales. La empresa ajusta su estrategia para aprovechar estos incentivos y protegerse frente a fluctuaciones normativas.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
    .bg-color-1.p-4.mb-5(data-aos="fade-left" style="background-color: #D9EFF8 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/25.png", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El análisis PESTEL es una herramienta valiosa para las organizaciones que buscan alinear sus estrategias con las fuerzas externas que moldean su entorno. Proporciona una visión sistémica y multidimensional del contexto global, ayudando a los líderes a identificar tendencias emergentes, riesgos y oportunidades. Aunque su enfoque es externo, su correcta aplicación permite preparar a las organizaciones para navegar con éxito en mercados complejos y cambiantes. 

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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/42001" target="_blank" rel="noopener noreferrer") Bas Amorós, E. (2013). Prospectiva e innovación (Vol. 1: Visiones). Plaza y Valdés.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/217714" target="_blank" rel="noopener noreferrer") Boada, A. J. & Cardona Montoya, G. Y. M. (2020). La prospectiva: más allá de las proyecciones. Fondo Editorial CEIPA.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/75568" target="_blank" rel="noopener noreferrer") Chávez Martínez, G. (2003). El pensamiento del estratega. Plaza y Valdés.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71774" target="_blank" rel="noopener noreferrer") López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica. Editorial Universo Sur.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/75157" target="_blank" rel="noopener noreferrer") López Segrera, F., Luis Grosso, J. (Coord.) & José Mojica, F. (Coord.). (2004). América Latina y el Caribe en el siglo XXI: perspectiva y prospectiva de la globalización. Editorial Miguel Ángel Porrúa.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/228417" target="_blank" rel="noopener noreferrer") Perilla Maluche, R. B. Orjuela Garzón, W. A. & Parra Moreno, C. (2020). Análisis de futuro: algunos métodos alternativos a la "caja de herramientas" de la escuela francesa. Sello Editorial Universidad del Tolima.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59107" target="_blank" rel="noopener noreferrer") Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos. Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/120296" target="_blank" rel="noopener noreferrer") Saldaña Almazán, J. & Niño Gutiérrez, N. S. (2017). Strategic planning at UAGro. Ediciones Eón.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.revistaespacios.com/a20v41n21/a20v41n21p29.pdf" target="_blank" rel="noopener noreferrer") Velásquez, J., Gómez, A., & Parra, D. (2020). Análisis prospectivo del entorno global y su impacto en las organizaciones. Revista Espacios, 41(21), 29.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.iso.org/standard/65694.html" target="_blank" rel="noopener noreferrer") International Organization for Standardization (ISO). (2018). ISO 31000:2018, Risk management – Guidelines.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.weforum.org/agenda/2024/01/informe-sobre-riesgos-globales-2024-los-desafios-mas-apremiantes-ponen-a-prueba-nuestra-capacidad-de-respuesta/" target="_blank" rel="noopener noreferrer") Foro Económico Mundial. (2024). Informe de Riesgos Globales 2024.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
