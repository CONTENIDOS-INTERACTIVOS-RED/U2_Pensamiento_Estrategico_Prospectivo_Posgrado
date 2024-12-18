<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4.mb-4(style="background-color: #fbecfa")
          p.mb-0 En un contexto global marcado por cambios rápidos e incertidumbre, la prospectiva estratégica surge como una herramienta indispensable para anticipar futuros posibles. Las organizaciones deben prepararse para enfrentar tanto riesgos como oportunidades, adaptándose con agilidad a las transformaciones tecnológicas, sociales y económicas. Esta Unidad 2 se enfoca en brindar a los estudiantes los conocimientos necesarios para analizar y gestionar escenarios futuros, permitiendo la toma de decisiones estratégicas, fundamentadas en entornos complejos.
        p.mb-0 El objetivo principal de la unidad es introducir el pensamiento prospectivo y las metodologías para la construcción de escenarios alternativos. Con herramientas como PESTEL, Delphi y escenarios exploratorios y normativos, los estudiantes desarrollarán habilidades para anticipar eventos futuros, evaluar riesgos y planificar estrategias adaptativas. De esta forma, podrán visualizar múltiples trayectorias posibles y alinear sus decisiones con los objetivos estratégicos de las organizaciones.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/1.svg', alt='')
    .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #fff8d5 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/2.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 La unidad también destaca tendencias emergentes claves, como la inteligencia artificial, la regionalización, la transformación digital y la economía verde, las cuales están moldeando el entorno global.
    p.mb-4 Estas tendencias exigen que las organizaciones reconfiguren sus modelos de negocio y adopten enfoques innovadores para mantener su competitividad y relevancia en mercados cambiantes.  La regionalización de las cadenas de suministro, por ejemplo, aumenta la resiliencia, mientras que la economía verde, impulsa la sostenibilidad. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.png', alt='')  
      .col-lg-8
        .p-4(style="background-color: #d9eff8 ")
          p.mb-0 Finalmente, esta unidad subraya la importancia de integrar la prospectiva estratégica con la gestión del riesgo, para fortalecer la resiliencia organizacional. A través de esta integración, los estudiantes aprenderán a gestionar la incertidumbre proactivamente, identificando amenazas y capitalizando oportunidades. La capacidad de anticipación será una ventaja clave para enfrentar los desafíos futuros y posicionarse estratégicamente, en un entorno global dinámico.
    
        
    

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
