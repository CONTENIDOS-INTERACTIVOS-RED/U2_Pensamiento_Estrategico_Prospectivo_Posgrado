<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Evaluación de la toma de decisiones en entornos inciertos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-lg-8
        p.mb-4 En los entornos actuales, donde la incertidumbre y el cambio son constantes, la toma de decisiones estratégicas se convierte en un proceso crítico. En este contexto, los líderes deben ser capaces de evaluar y gestionar situaciones con información incompleta, previendo riesgos y oportunidades futuras. A diferencia de las decisiones tomadas en condiciones de certeza, las que se realizan en entornos inciertos, requieren habilidades analíticas avanzadas y un enfoque flexible que permita la adaptación continua (Boada & Cardona Montoya, 2020).
        .fondo-color-sistema-o.p-4
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema3/2.svg",style="max-width: 90px;")
            .col
              p.mb-0 Herbert Simón, creador del concepto de racionalidad limitada, explica que las personas no siempre tienen acceso a toda la información necesaria, ni el tiempo suficiente para tomar la decisión "perfecta". En su lugar, optan por decisiones satisfactorias, es decir, aquellas que son suficientemente buenas, dadas las circunstancias. Esta idea es clave para entender por qué la evaluación estratégica en la incertidumbre, requiere flexibilidad y capacidad de ajuste continuo (Abad, 2014).

      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/1.png",style="max-width: 400px;")
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principales desafíos
    
    p.mb-4 Los principales desafíos en la toma de decisiones bajo incertidumbre, son:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        .fondo-color-sistema-p.p-4.py-5
          figure.py-5
            img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="30%" y="68%" numero="+")
        .h5.mb-2 Falta de información completa
        p.mb-0 En entornos inciertos, no siempre se dispone de toda la información necesaria para prever los resultados de una decisión. Esto obliga a los tomadores de decisiones a tra bajar con datos incompletos o ambiguos.

      .tarjeta.bg-white.p-4(x="43.5%" y="68%" numero="+")
        .h5.mb-2 Riesgo y ambigüedad
        p.mb-1 La gestión del riesgo es un aspecto transversal en cualquier estrategia. En un entorno VUCA, la capacidad de anticipar y gestionar riesgos, resulta fundamental para asegurar la continuidad organizacional. El análisis prospectivo, permite a las organizaciones visualizar futuros posibles y preparar planes de contingencia que respondan a diferentes escenarios.
        p.mb-0 A diferencia de la simple previsión, la gestión del riesgo en la estrategia moderna, implica una evaluación continua de los eventos emergentes. Así, las organizaciones pueden identificar señales débiles del entorno y responder antes que los riesgos se materialicen por completo. Boada y Cardona Montoya (2020) subrayan la importancia de contar con modelos de análisis que permitan adaptarse rápidamente, a los cambios imprevistos, garantizando la estabilidad en escenarios de alta incertidumbre.

      .tarjeta.bg-white.p-4(x="56.5%" y="68%" numero="+")
        .h5.mb-2 Presión para decisiones rápidas
        p.mb-0 En un contexto cambiante, las decisiones no solo deben ser acertadas, sino también oportunas. El tiempo limitado para deliberar, puede aumentar la probabilidad de error, por lo que es fundamental contar con procesos efectivos de evaluación estratégica.

      .tarjeta.bg-white.p-4(x="70%" y="68%" numero="+")
        .h5.mb-2 Efecto del sesgo cognitivo
        p.mb-0 Los tomadores de decisiones no son inmunes a los sesgos cognitivos, que pueden influir en su juicio. La heurística y los prejuicios inconscientes, pueden llevar a decisiones subóptimas, especialmente en situaciones de alta incertidumbre.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Herramientas para la toma de decisiones estratégicas, en incertidumbre
    
    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/4.png",style="max-width: 400px;")
      .col-lg-8
        p.mb-4 El uso de herramientas prospectivas, ha demostrado ser esencial durante la pandemia del COVID-19. Industrias como la salud y la aviación, aplicaron análisis de escenarios para prever las fluctuaciones en la demanda y los cambios regulatorios, permitiéndoles ajustar sus operaciones con agilidad. Esta experiencia destaca cómo la prospectiva estratégica no solo minimiza riesgos, sino que también genera oportunidades de innovación en momentos de crisis (Boada & Cardona Montoya, 2020).

        .fondo-color-sistema-i.p-4
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema3/5.svg",style="max-width: 90px;")
            .col
              p.mb-0 Las organizaciones que adoptan esta práctica, desarrollan estrategias resilientes, preparándose para enfrentar múltiples retos  futuros. En un entorno incierto, la flexibilidad operativa y la capacidad de visualizar escenarios, son elementos diferenciadores que garantizan la competitividad a largo plazo. Por ende, se recomienda tener en cuenta los siguientes criterios en momentos de incertidumbre:

    .fondo-personalizado-1.f2.mb-5
      .fondo-personalizado-1__contenido.py-5
        SlyderA(tipo="b").bg-white
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Análisis de escenarios
              p.mb-0 Esta metodología permite identificar diferentes futuros posibles y preparar estrategias para cada uno de ellos. El análisis de escenarios es útil para anticipar cambios y desarrollar respuestas adaptativas (Boada & Cardona Montoya, 2020).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/6.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Árboles de decisión
              p.mb-0 Esta herramienta gráfica ayuda a visualizar las posibles decisiones y sus consecuencias. Cada rama del árbol representa una decisión o un evento posible, permitiendo evaluar las opciones y sus riesgos asociados.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/7.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Evaluación prospectiva
              p.mb-0 La prospectiva estratégica permite prever tendencias y posibles desarrollos futuros, reduciendo la incertidumbre mediante la planificación anticipada (Bas Amorós, 2013). Esta técnica es esencial para la gestión del riesgo en entornos dinámicos.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/8.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Toma de decisiones colaborativa
              p.mb-0 Involucrar a múltiples actores en el proceso de decisión facilita la identificación de más riesgos y oportunidades, enriqueciendo el análisis estratégico.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/9.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Uso de inteligencia artificial en el análisis prospectivo
              p.mb-0 En la actualidad, la inteligencia artificial (IA) se ha convertido en una herramienta clave para el análisis prospectivo. Empresas como IBM y Microsoft, utilizan algoritmos de aprendizaje automático, para prever tendencias en el mercado y diseñar escenarios alternativos. La integración de IA permite analizar grandes volúmenes de datos en tiempo real, facilitando la toma de decisiones estratégicas más informadas y proactivas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/10.png')

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Importancia del feedback y la evaluación continua

    p.mb-4 Una característica clave de la toma de decisiones en entornos inciertos, es la necesidad de una evaluación continua y una retroalimentación. Esto implica monitorear los resultados de las decisiones y realizar ajustes conforme se desarrolla el contexto. La capacidad de aprendizaje organizacional, es fundamental para mejorar la toma de decisiones y minimizar errores futuros (Chávez Martínez, 2003).

    .row
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/11.png",style="max-width: 400px;")
      .col-lg-8
        .fondo-color-sistema-n.p-4.mb-4.mb-lg-5
          .row
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/tema3/12.svg",style="max-width: 90px;")
            .col
              p.mb-0 #[b Ejemplo práctico: decisiones estratégicas en una crisis.] Durante la pandemia del COVID-19, muchas empresas tuvieron que tomar decisiones estratégicas bajo condiciones de extrema incertidumbre. Organizaciones que utilizaron análisis de escenarios, pudieron responder rápidamente a los cambios del mercado, ajustando sus modelos de negocio y adoptando nuevas tecnologías para continuar operando.
        p.mb-0 La toma de decisiones estratégicas en entornos inciertos, es un proceso complejo que requiere preparación, flexibilidad y herramientas adecuadas para minimizar riesgos y aprovechar oportunidades. El uso de metodologías como el análisis de escenarios, junto con la evaluación continua, permite a los líderes tomar decisiones más informadas y resilientes, maximizando las posibilidades de éxito en un entorno dinámico.

     

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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
