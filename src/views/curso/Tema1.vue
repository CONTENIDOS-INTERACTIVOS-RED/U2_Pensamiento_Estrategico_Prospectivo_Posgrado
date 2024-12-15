<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estrategia: definición y características en contextos complejos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden

    .row.mb-4
      .col-lg-8
        .fondo-color-sistema-l.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El entorno organizacional actual, se caracteriza por su constante cambio, incertidumbre y complejidad. En este contexto, entender cómo se definen y aplican las estrategias, se vuelve fundamental para los profesionales que buscan liderar procesos eficientes y adaptativos. Esta unidad se enfoca en la integración del pensamiento complejo y el pensamiento sistémico, como herramientas esenciales para la toma de decisiones estratégicas.
        p.mb-0 La estrategia, como concepto, ha evolucionado desde enfoques tradicionales hacia visiones más amplias que contemplan la incertidumbre y las dinámicas propias de los entornos contemporáneos. En este marco, no basta con establecer objetivos rígidos; es necesario desarrollar la capacidad de adaptación y una visión integral que contemple múltiples variables interconectadas (Chávez Martínez, 2003).

      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
            img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
    
    .fondo-color-sistema-k.mb-4
      .row.align-items-center
        .col-lg-4
          figure
            img.mx-auto(src="@/assets/curso/tema1/3.png")
        .col-lg-8
          p.mb-0.p-4 El pensamiento complejo, propuesto por Edgar Morin, permite analizar las organizaciones y sus desafíos, desde una perspectiva multidimensional, considerando las interacciones entre distintos factores internos y externos. Por otro lado, el pensamiento sistémico facilita la comprensión de cómo las partes de un sistema, están relacionadas entre sí, lo que resulta indispensable para la toma de decisiones estratégicas eficaces (Bas Amorós, 2013).


    .bg-full-width.fondo-color-sistema-i
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Decisiones estratégicas en condiciones de volatilidad y promueve la innovación
            p.mb-4(data-aos="fade-right") En el PDF #[b Estrategia], se analizan los conceptos de estrategia y pensamiento complejo en un entorno organizacional caracterizado por la incertidumbre y la constante evolución. Se estudia cómo la estrategia ha pasado de enfoques rígidos hacia modelos adaptativos y flexibles que integran el pensamiento sistémico para entender las interrelaciones entre factores internos y externos, junto al pensamiento complejo, que permite gestionar la ambigüedad y no linealidad de los sistemas modernos. Este enfoque guía la toma de decisiones estratégicas en condiciones de volatilidad y promueve la innovación, sostenibilidad y resiliencia organizacional.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de proyectos

          .col-lg-5
            figure(data-aos="zoom-in")
              img.ms-auto(src='@/assets/curso/tema1/4.png',style="max-width: 400px;")
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
