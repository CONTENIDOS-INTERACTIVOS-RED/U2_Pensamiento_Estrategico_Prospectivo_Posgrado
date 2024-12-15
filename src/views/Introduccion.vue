<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .fondo-personalizado-1.size-full.med.pos-bottom.bottom-1.f1
      .fondo-personalizado-1__contenido
        .row.mb-4
          .col-lg-8
            .fondo-color-sistema-i.p-4.mb-4
              p.mb-0 En un mundo donde los cambios son constantes y las organizaciones enfrentan entornos cada vez más inciertos y dinámicos, es fundamental desarrollar estrategias que vayan más allá de la planificación tradicional. Esta unidad se enfoca en la integración del pensamiento sistémico y complejo, como herramientas esenciales, para liderar procesos estratégicos en escenarios complejos. La capacidad de analizar la interdependencia entre múltiples variables y adaptarse de manera continua, resulta clave para la toma de decisiones efectivas en contextos volátiles.
            p.mb-4 Al finalizar esta unidad, se espera que los estudiantes desarrollen habilidades para evaluar estrategias en función del entorno, integrando principios del pensamiento sistémico y justificando la toma de decisiones bajo incertidumbre. Estos conocimientos serán fundamentales para enfrentar los desafíos contemporáneos en el ámbito organizacional y empresarial, fomentando una perspectiva estratégica y proactiva.
            p.fw-bold El contenido de la unidad se organiza en tres ejes principales:
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/intro/1.png",style="max-width: 400px;")
        
        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4
            .fondo-color-sistema-j.borde-15.p-3.h-100.align-content-center
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/intro/3.svg",style="max-width: 90px;")
                .col
                  p.mb-0.text-white La evolución y características de la estrategia.
          .col-lg-4.col-md-6.mb-4
            .bg-white.borde-15.p-3.h-100.align-content-center.sombra-p-1
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/intro/4.svg",style="max-width: 90px;")
                .col
                  p.mb-0 La aplicación del pensamiento sistémico y complejo.
          .col-lg-4.col-md-6.mb-4
            .bg-white.borde-15.p-3.h-100.align-content-center.sombra-p-1
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/intro/5.svg",style="max-width: 90px;")
                .col
                  p.mb-0 La toma de decisiones en condiciones inciertas.
    
    .row
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/intro/6.png",style="max-width: 400px;")
      .col-lg-8
        p.mb-lg-5 A lo largo de estas secciones, se presentarán casos prácticos, reflexiones conceptuales y ejercicios, que permitan consolidar las competencias esperadas. Se alienta la participación activa en las actividades propuestas, así como una reflexión constante sobre la aplicabilidad del contenido en situaciones reales.
        .fondo-color-sistema-k.p-4
          p.mb-0 Se espera que los estudiantes asuman un rol activo en su proceso de aprendizaje, participando en discusiones y actividades colaborativas. El compromiso con las tareas asignadas y la disposición para integrar conceptos nuevos, serán esenciales para aprovechar al máximo esta unidad. Con este enfoque, se busca preparar a los participantes para enfrentar la complejidad del entorno empresarial contemporáneo y tomar decisiones estratégicas con mayor confianza y efectividad.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
