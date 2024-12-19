<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Identificación de riesgos, oportunidades y tendencias globales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bg-tema-5
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .bg-color-1.p-4.mb-5.h-100.d-flex.align-items-center(data-aos="fade-left" style="background-color: #FFF8D5 ")
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/49.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El riesgo se define como la incertidumbre sobre los resultados futuros, tanto en términos de amenazas como de oportunidades. No se limita a la posibilidad de q ue ocurra un evento negativo, sino que también abarca los efectos positivos o beneficios inesperados. La ISO 31000:2018, un estándar internacional sobre gestión del riesgo, amplía esta visión al considerar el riesgo como “el efecto de la incertidumbre en los objetivos” (ISO, 2018). Esto implica que el riesgo no solo es un factor externo, sino que su impacto depende de cómo afecta a los objetivos estratégicos de una organización.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/50.png', alt='')
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Principios fundamentales de la ISO 31000
    p.mb-4 La norma ISO 31000:2018, proporciona un marco para gestionar de manera eficaz, los riesgos, facilitando la toma de decisiones informada y la asignación adecuada de recursos. Los principios claves de esta norma incluyen:
    .bg-full-width.bg-motivo.p-5.mb-5  
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Creación y protección de valor
            p.mb-0 La gestión del riesgo debe contribuir a mejorar el desempeño y la eficiencia.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/51.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Enfoque personalizado
            p.mb-0 Cada organización debe adaptar su gestión del riesgo a su contexto y objetivos específicos.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/52.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Integración en la cultura organizacional
            p.mb-0 El proceso de gestión del riesgo debe estar presente en todas las decisiones estratégicas.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/53.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Basada en la mejor información disponible
            p.mb-0 La gestión de riesgos se fundamenta en datos precisos y análisis prospectivo.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/54.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Consideración de factores humanos y culturales
            p.mb-0 La percepción del riesgo varía entre diferentes culturas y partes interesadas.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/55.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-6.mb-4.mb-lg-0
            h4 Mejora continua
            p.mb-0 La gestión del riesgo es un proceso dinámico que debe ser revisado y mejorado de manera constante.
            
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/56.png', alt='Texto que describa la imagen')
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Definición operativa del riesgo en la ISO 31000
    p.mb-4 En el marco de la ISO 31000, el riesgo no es únicamente un evento aislado, sino el efecto de la incertidumbre sobre los objetivos organizacionales. Este enfoque integrador considera
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/57.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Probabilidad y consecuencia
          p.mb-0.text-center El riesgo se evalúa, tanto en términos de la posibilidad de ocurrencia como de su impacto.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/57.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Amenazas y oportunidades
          p.mb-0.text-center Permite gestionar no solo las pérdidas potenciales, sino también las oportunidades que emergen de la incertidumbre.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/57.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Contexto estratégico
          p.mb-0.text-center Los riesgos deben ser analizados en relación con los objetivos de la organización, lo que permite priorizar aquellos que pueden afectar el desempeño crítico.
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.3 Proceso de gestión del riesgo, según la ISO 31000
    p.mb-4 El proceso recomendado por la ISO 31000, consta de las siguientes fases:
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tabla 4
                  p Para comenzar con el estudio de esta temática, lo invitamos a ver el siguiente pdf:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexos_tabla4.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.4 Justificación de la gestión del riesgo con la ISO 31000
    p.mb-4 El uso de la norma ISO 31000, es esencial para garantizar que la organización gestione los riesgos de manera proactiva y eficiente, logrando:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="1. Mejor toma de decisiones")
            p.mb-0 Al contar con un marco claro de análisis, las organizaciones pueden evaluar riesgos y oportunidades, de forma informada.
          div(titulo="2. Mejora en la resiliencia organizacional")
            p.mb-0 Permite que las empresas se adapten rápidamente a los cambios e incertidumbres del entorno.
          div(titulo="3. Optimización del uso de recursos")
            p.mb-0 La gestión eficaz del riesgo, asegura que los recursos se dirijan a las áreas más vulnerables o estratégicas.
          div(titulo="Cumplimiento normativo y reputación")
            p.mb-0 La ISO 31000 ayuda a las organizaciones a mantenerse dentro de los marcos regulatorios y a proteger su imagen pública.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/58.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/59.png', alt='')
      .col-lg-8
        .bg-color-1.p-4.mb-5.h-100.d-flex.align-items-center(data-aos="fade-left" style="background-color: #F8DCF6 ")
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/60.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La ISO 31000:2018, redefine el riesgo como una oportunidad para el crecimiento, además de una amenaza. Con un enfoque proactivo, las organizaciones no solo mitigan amenazas, sino que también identifican oportunidades para mejorar su competitividad. Al integrar la gestión del riesgo en su estrategia, las organizaciones pueden responder con agilidad, a los desafíos actuales y futuros, alineando la toma de decisiones con sus objetivos estratégicos. 
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #EBF6FB ")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Oportunidades y tendencias globales
            p.mb-4(data-aos="fade-right") El año 2024 plantea un panorama global de retos significativos, pero también de oportunidades estratégicas que pueden redefinir sectores y mejorar la resiliencia frente a las crisis. A continuación, el PDF Oportunidades y tendencias globales, explora tendencias clave como la transición hacia una economía verde, el avance de la inteligencia artificial, la regionalización de las cadenas de suministro, la gobernanza digital y la innovación en el sector salud. A través de estas áreas, se destacan oportunidades para quienes adopten un enfoque proactivo, aprovechando las transformaciones para generar impacto positivo y ventaja competitiva en un entorno global en constante cambio.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexos_Oportunidades_y_tendencias_globales_en_el_2024.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Oportunidades y tendencias globales.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/61.png', alt='')
            
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
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
