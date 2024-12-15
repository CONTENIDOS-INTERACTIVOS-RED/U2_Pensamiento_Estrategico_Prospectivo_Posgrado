<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Pensamiento sistémico y pensamiento complejo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .fondo-color-sistema-m.mb-4
      .row.align-items-center
        .col-lg-8
          p.mb-0.p-4.ps-lg-5 El pensamiento sistémico y el pensamiento complejo, proporcionan un marco clave para comprender cómo las organizaciones y los sistemas interactúan en entornos inciertos y dinámicos. Ambos enfoques se complementan, permitiendo un análisis integral y multidimensional que ayuda a los líderes a gestionar las interdependencias y a tomar decisiones estratégicas adaptativas.
        .col-lg-4.order-first.order-lg-last
          figure
            img.mx-auto(src="@/assets/curso/tema2/1.png")
    
    p.fw-bold.mb-4 Conozcamos más sobre la temática:

    .row.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/2.png",style="max-width: 400px;")
      .col-lg-8
        LineaTiempoD.color-primario.large
          div(numero="1" titulo="El pensamiento sistémico: analizar interrelaciones para resolver problemas") 
            p.mb-4 El pensamiento sistémico se enfoca en la comprensión de cómo los elementos de un sistema están interconectados y cómo estos vínculos generan comportamientos colectivos (Senge, 1990). Este enfoque es crucial porque permite identificar patrones subyacentes que no siempre son visibles en un análisis lineal. Más allá de encontrar soluciones rápidas a los problemas, busca detectar causas profundas que afectan a diversas partes del sistema.

            p #[b Ejemplo práctico.] IKEA utiliza el pensamiento sistémico para gestionar su cadena de valor global. Cada etapa de su proceso de producción, desde la selección de materiales hasta la entrega al cliente, está cuidadosamente interconectada. IKEA optimiza esta cadena mediante alianzas estratégicas con proveedores sostenibles y la gestión eficiente de inventarios, lo que permite reducir costos y mejorar su sostenibilidad. Esta visión sistémica permite a la empresa reaccionar de manera eficiente a interrupciones en la cadena de suministro y mantener su competitividad global.
          div(numero="2" titulo="El pensamiento complejo: aceptar la ambigüedad y la no linealidad") 
            p.mb-4 El pensamiento complejo, promovido por Edgar Morin (2008), complementa al sistémico al reconocer que los sistemas no siempre pueden explicarse mediante la suma de sus partes. Este enfoque acepta la ambigüedad y la incertidumbre como características inherentes de los sistemas organizacionales. A diferencia de un análisis lineal, el pensamiento complejo asume que los cambios en un área pueden producir efectos no proporcionales o imprevistos en otras partes del sistema.

            p #[b Ejemplo práctico.] Durante la última década, Starbucks ha aplicado el pensamiento complejo al integrar nuevas prácticas sostenibles y digitales en su modelo de negocio. Al introducir opciones más saludables, colaborar con comunidades locales y expandir su aplicación móvil, la empresa ha reconocido que cada intervención afecta no solo a sus clientes, sino también a sus colaboradores y proveedores. Estos ajustes han generado resultados inesperados, como un aumento en la lealtad de los clientes y una mayor eficiencia operativa. La capacidad de Starbucks para adaptarse sin perder su esencia ilustra cómo el pensamiento complejo ayuda a navegar cambios inciertos en un entorno global.
          div(numero="3" titulo="Relación entre pensamiento sistémico y pensamiento complejo") 
            p.mb-4 El pensamiento sistémico y complejo, se complementan de manera esencial. Mientras el pensamiento sistémico ayuda a mapear las interrelaciones internas y externas, el pensamiento complejo permite aceptar que las organizaciones operan en un entorno donde no todas las variables pueden controlarse. Esta combinación permite a los líderes anticipar posibles escenarios y diseñar estrategias que integren la flexibilidad y la adaptación.

            p #[b Ejemplo práctico.] La empresa Patagonia combina ambos enfoques para mantenerse como referente en sostenibilidad e innovación. Su estrategia no solo considera la eficiencia interna, sino también el impacto ambiental y social de sus productos. Al adoptar un enfoque sistémico, Patagonia gestiona cuidadosamente su ciclo de vida de los productos y, al mismo tiempo, reconoce, desde la perspectiva del pensamiento complejo, que cada cambio en la cadena de producción puede generar efectos inesperados. Por ejemplo, al lanzar iniciativas de reciclaje, han descubierto que los consumidores responden con mayor fidelidad y compromiso, fortaleciendo su reputación de manera orgánica.
    
    p.mb-4(data-aos="fade-left") #[strong Tabla 1.] Comparativo: pensamiento sistémico vs. pensamiento complejo

    .tabla-a.mb-5
      table
        thead
          tr
            th.text-center.text-white Aspecto
            th.text-center.text-white Pensamiento sistémico
            th.text-center.text-white Pensamiento complejo
        tbody
          tr
            td.fw-bold.text-center Enfoque
            td Entender la totalidad mediante la interacción entre las partes.
            td Aceptar la ambigüedad y la no linealidad en los sistemas.
          tr
            td.fw-bold.text-center Objetivo
            td Identificar patrones y relaciones interdependientes.
            td Gestionar lo inesperado y adaptarse a cambios imprevistos.
          tr
            td.fw-bold.text-center Naturaleza del análisis
            td Análisis estructurado y causal.
            td Análisis emergente y multidimensional.
          tr
            td.fw-bold.text-center Rol de la incertidumbre
            td Maneja incertidumbre mediante interconexiones claras.
            td Acepta la incertidumbre como característica inherente.
          tr
            td.fw-bold.text-center Herramientas utilizadas
            td Mapeo de sistemas, bucles de retroalimentación.
            td Análisis de patrones emergentes, escenarios prospectivos.
          tr
            td.fw-bold.text-center Ejemplos prácticos
            td Gestión de cadena de valor (IKEA).
            td Adaptación a nuevas demandas (Starbucks).
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Características del pensamiento sistémico y del pensamiento complejo, en la estrategia
    
    p.mb-4 El pensamiento sistémico y el pensamiento complejo, permiten comprender los problemas estratégicos de manera integral. Estos enfoques brindan a las organizaciones, herramientas para anticiparse a los cambios, gestionar la incertidumbre y desarrollar resiliencia, aspectos esenciales en la planificación estratégica contemporánea.

    p.mb-4.fw-bold Estas características son:

    .row.mb-5
      .col-lg-8
        LineaTiempoD.color-primario.large
          div(numero="1" titulo="Interdependencia y multidimensionalidad") 
            p.mb-1 Las organizaciones actuales operan en un entorno donde múltiples dimensiones, como los aspectos sociales, ambientales y económicos, están profundamente interconectadas. Senge (1990), señala que el pensamiento sistémico ayuda a los líderes a comprender estas interrelaciones, evitando enfoques fragmentados en la toma de decisiones.
            p.mb-1 Además, alinear la estrategia con los Objetivos de Desarrollo Sostenible (ODS), permite que las organizaciones integren valor económico con responsabilidad social. Un enfoque multidimensional asegura que cada decisión estratégica, no solo genere resultados financieros, sino que también tenga un impacto positivo en la comunidad y el medio ambiente (Chávez Martínez, 2003).
            p.mb-0 #[b Ejemplo práctico: Heineken y la responsabilidad social.] Heineken implementa estrategias de responsabilidad social que abordan tanto la producción sostenible como el impacto comunitario. Esto demuestra cómo una visión sistémica permite alinear objetivos internos con las expectativas externas, creando valor compartido (López Fernández, 2016).
          div(numero="2" titulo="No linealidad y efectos impredecibles") 
            p.mb-1 En los sistemas complejos, las causas y efectos no siguen una lógica lineal. Como señala Morin (2008), los sistemas organizacionales son no lineales y dinámicos, lo que implica que una intervención pequeña, puede tener un impacto significativo o, por el contrario, grandes esfuerzos pueden generar efectos limitados. Las organizaciones deben aprender a gestionar esta no linealidad para mantenerse competitivas.
            p.mb-0 #[b Ejemplo práctico: Tesla y la innovación estratégica.] Tesla ha logrado transformar la industria automotriz al apostar por tecnologías limpias. Su decisión de liberar patentes aceleró la transición hacia vehículos eléctricos, generando un impacto mayor al previsto. Esto refleja cómo acciones estratégicas pequeñas pueden desencadenar cambios estructurales (Boada & Cardona Montoya, 2020).
          div(numero="3" titulo="Retroalimentación y bucle de realimentación") 
            p.mb-1 El pensamiento sistémico destaca la importancia de los bucles de retroalimentación en los sistemas organizacionales. Estos bucles, ya sean positivos o negativos, permiten a las organizaciones ajustar sus estrategias en función de los resultados obtenidos y evitar errores repetitivos (Senge, 1990). La retroalimentación es un elemento central en el desarrollo de procesos de mejora continua.
            p.mb-0 #[b Ejemplo práctico: Nike y la retroalimentación del cliente.] Nike utiliza plataformas digitales para recopilar opiniones de los consumidores, ajustando sus diseños y productos, en función de las necesidades cambiantes del mercado. Esta retroalimentación no solo mejora la experiencia del cliente, sino que también fortalece su capacidad de innovación estratégica (López Fernández, 2016).
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/3.png",style="max-width: 400px;")
    
    .row.mb-5
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/4.png",style="max-width: 400px;")
      .col-lg-8
        LineaTiempoD.color-primario.large
          div(numero="1" titulo="Gestión del riesgo mediante análisis prospectivo") 
            p.mb-1 La prospectiva estratégica se centra en la visualización de futuros posibles, permitiendo que las organizaciones anticipen riesgos y oportunidades. Según Boada y Cardona Montoya (2020), la gestión del riesgo mediante el análisis prospectivo, es esencial en un entorno caracterizado por la volatilidad y la incertidumbre. Las organizaciones que adoptan esta práctica, desarrollan estrategias resilientes que las preparan para escenarios múltiples.
            p.mb-0 #[b Ejemplo práctico: Airbus y la gestión prospectiva.] Airbus utiliza la prospectiva para prever cambios en la industria aeroespacial, anticipando regulaciones ambientales y diseñando aviones más eficientes. Esta estrategia le permite adaptarse a los cambios regulatorios y tecnológicos, con antelación, minimizando riesgos futuros (Boada & Cardona Montoya, 2020).
          div(numero="2" titulo="Autoorganización y adaptación") 
            p.mb-1 El pensamiento complejo subraya la importancia de la autoorganización en sistemas vivos y organizaciones. Según Morin (2008), los sistemas complejos tienden a reorganizarse de manera espontánea, en respuesta a perturbaciones del entorno. Esta capacidad permite que las organizaciones sean resilientes, adaptándose continuamente a los cambios sin depender de un control centralizado.
            p.mb-1 En lugar de utilizar ejemplos específicos como empresas particulares, es relevante profundizar en cómo la autoorganización fomenta la innovación y la agilidad organizacional. La toma de decisiones distribuida, permite que cada unidad dentro de la organización responda rápidamente a las necesidades del contexto. Este enfoque es especialmente relevante en sistemas vivos como ecosistemas naturales, donde los componentes se ajustan en tiempo real para mantener un equilibrio funcional (Morin, 2008).
            p.mb-0 #[b Ejemplo práctico: Spotify y la adaptación organizacional.] Spotify ha desarrollado una estructura basada en equipos autónomos (“squads”) que trabajan de forma independiente en proyectos clave. Esta autoorganización permite que la empresa se adapte rápidamente a los cambios del mercado sin perder su capacidad de innovación (Chávez Martínez, 2003).
          div(numero="3" titulo="Resiliencia organizacional") 
            p.mb-1 La resiliencia organizacional, se refiere a la capacidad de la organización para superar situaciones adversas y continuar prosperando. Boada y Cardona Montoya (2020) destacan que las organizaciones resilientes desarrollan estrategias adaptativas, fomentando el aprendizaje continuo y la mejora constante.
            p.mb-0 #[b Ejemplo práctico:] Lego y la transformación estratégica. Tras una crisis financiera, Lego adoptó un modelo de negocio basado en la digitalización y alianzas estratégicas. Esta transformación, demuestra cómo la resiliencia organizacional permite a la empresa, no solo recuperarse, sino reinventarse y fortalecer su liderazgo en la industria global de juguetes (Boada & Cardona Montoya, 2020).
    
    .row.mb-5
      .col-lg-8
        .fondo-color-sistema-n.p-4.h-100.align-content-center
          .row
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/tema2/5.svg",style="max-width: 90px;")
            .col
              p.mb-0 El pensamiento sistémico y el pensamiento complejo, brindan a las organizaciones una comprensión profunda de la interdependencia, la no linealidad y la necesidad de adaptación. Mediante la gestión del riesgo, la autoorganización y el aprendizaje continuo, las organizaciones pueden desarrollar estrategias resilientes y sostenibles, en un entorno cada vez más incierto. Estos enfoques son esenciales para anticipar cambios, responder con agilidad y asegurar el éxito a largo plazo.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/6.png",style="max-width: 400px;")
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aplicaciones en la gestión estratégica
    
    p.mb-5 El pensamiento sistémico y el pensamiento complejo, se han consolidado como una herramienta esencial en la gestión estratégica, especialmente en entornos inciertos y cambiantes. Estos enfoques permiten a los líderes diseñar estrategias más adaptativas, aprovechar patrones emergentes y gestionar riesgos de forma proactiva (Boada & Cardona Montoya, 2020). A continuación, se destacan algunas aplicaciones prácticas de estos marcos conceptuales en la gestión estratégica moderna:

    .fondo-personalizado-1.f2.mb-5
      .fondo-personalizado-1__contenido.py-5
        SlyderA(tipo="b").bg-white
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Detección de patrones y dinámicas internas y externas
              p.mb-1 El pensamiento sistémico permite identificar patrones repetitivos y tendencias tanto dentro como fuera de la organización. Esto es crucial para anticipar comportamientos emergentes y adaptar las estrategias en consecuencia. Según Senge (1990), los patrones subyacentes proporcionan información valiosa para diseñar intervenciones estratégicas más precisas.
              p.mb-0 #[b Ejemplo práctico: Zara y la adaptación al mercado.] Zara, parte del grupo Inditex, aplica un modelo estratégico basado en la detección de patrones de consumo, en tiempo real. Su enfoque le permite identificar rápidamente tendencias de moda emergentes y ajustar su producción en función de la demanda, garantizando una ventaja competitiva significativa.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/8.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Identificación de puntos de apalancamiento
              p.mb-1 El pensamiento sistémico facilita la identificación de puntos de apalancamiento, es decir, áreas estratégicas donde intervenciones pequeñas pueden generar grandes cambios en el sistema (Senge, 1990). Esto permite a las organizaciones optimizar recursos y maximizar resultados con acciones precisas.
              p.mb-0 #[b Ejemplo práctico: Toyota y la producción #[em Justo a Tiempo.]] Toyota identificó que una optimización en la gestión de inventarios, podía tener un impacto significativo en toda la cadena de suministro. A través del modelo #[em Just-in-Time], la empresa ha mejorado su eficiencia operativa y reducido costos, demostrando cómo un punto de apalancamiento, puede transformar un sistema complejo.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/9.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Evaluación de la sostenibilidad de las decisiones
              p.mb-1 El pensamiento complejo impulsa una evaluación exhaustiva de las repercusiones a largo plazo, de las decisiones estratégicas. Morin (2008) destaca la necesidad de integrar múltiples perspectivas al evaluar la sostenibilidad, asegurando que las estrategias no solo generen beneficios inmediatos, sino también impactos positivos duraderos.
              p.mb-0 #[b Ejemplo práctico: Patagonia y la sustentabilidad.] La empresa Patagonia incorpora criterios ambientales y sociales en cada una de sus decisiones estratégicas. A través de su compromiso con la sostenibilidad, ha logrado fortalecer su reputación corporativa y asegurar la fidelización de clientes conscientes del impacto ambiental.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/10.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Uso de herramientas prospectivas para visualizar escenarios
              p.mb-1 El análisis prospectivo es fundamental para visualizar futuros posibles y diseñar respuestas estratégicas adecuadas (Boada & Cardona Montoya, 2020). Las organizaciones que emplean esta herramienta, pueden anticipar riesgos y oportunidades, creando planes de contingencia, efectivos para diversos escenarios.
              p.mb-0 #[b Ejemplo práctico: Shell y la planeación de escenarios.] Shell ha sido pionera en el uso de análisis prospectivo, desarrollando escenarios alternativos para prever cómo las fluctuaciones en el precio del petróleo y las regulaciones ambientales podrían afectar su industria. Esta planificación estratégica le ha permitido mantener su competitividad en entornos inciertos.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/11.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Desarrollo de capacidades adaptativas y autoorganización
              p.mb-1 El pensamiento complejo promueve la autoorganización, donde las decisiones emergen desde la base de la organización sin necesidad de control centralizado. Esto fomenta la capacidad de adaptación continua, permitiendo que las organizaciones se ajusten rápidamente a los cambios del entorno (Morin, 2008).
              p.mb-0 #[b Ejemplo práctico: Amazon y la innovación autónoma.] Amazon fomenta la innovación dentro de sus equipos autónomos, permitiendo que cada área identifique oportunidades de mejora e implemente cambios sin intervención central. Esta autoorganización ha sido clave para su capacidad de mantenerse a la vanguardia del comercio electrónico.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/12.png')
          .row.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              p.text-bold.mb-4 Aplicación del aprendizaje organizacional
              p.mb-1 El aprendizaje organizacional es un componente esencial del pensamiento sistémico. Senge (1990) introduce el concepto de organización que aprende, en el que las empresas desarrollan procesos para reflexionar sobre sus éxitos y fracasos, ajustando sus estrategias, en función de las lecciones aprendidas.
              p.mb-0 #[b Ejemplo práctico: Microsoft y la cultura de aprendizaje.] Microsoft adoptó una cultura de aprendizaje continuo, tras una serie de fracasos en productos como Windows Phone. Esta reflexión estratégica le permitió reorientarse hacia servicios en la nube y desarrollar productos innovadores como Microsoft Teams, posicionándose como líder en tecnología colaborativa.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/13.png')
    
    p.mb-5 Por ende, es de interpretar que el pensamiento sistémico y el pensamiento complejo, sean fundamentales para enfrentar los desafíos estratégicos en un entorno volátil e incierto. La capacidad de detectar patrones, identificar puntos de apalancamiento, evaluar sostenibilidad y desarrollar capacidades adaptativas, permite a las organizaciones diseñar estrategias más efectivas y resilientes. Al integrar herramientas prospectivas y fomentar el aprendizaje organizacional, las empresas pueden anticipar cambios, gestionar la incertidumbre y prosperar en un mundo en constante transformación.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Importancia para los líderes y tomadores de decisiones
    
    .fondo-color-sistema-m.mb-4
      .row.align-items-center
        .col-lg-4
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/tema2/14.png",style="max-width: 402px;")
        .col-lg-8
          p.mb-0.p-4 El pensamiento sistémico y el pensamiento complejo, representan un enfoque crucial en la toma de decisiones estratégicas, especialmente en un mundo caracterizado por la interdependencia de factores, volatilidad e incertidumbre. En este contexto, los líderes deben adoptar una visión amplia que les permita anticipar cambios, gestionar riesgos y generar resiliencia en sus organizaciones. La capacidad para abordar los problemas de manera integral y desarrollar respuestas estratégicas ajustadas a las realidades cambiantes, se convierte en una competencia clave para el liderazgo moderno.
    
    .row.mb-4
      .col-lg-8
        LineaTiempoD.color-primario.large
          div(numero="1" titulo="Anticipación del cambio y adaptación continua") 
            p.mb-1 La anticipación de cambios futuros, combinada con la capacidad de adaptación, es un principio fundamental del pensamiento sistémico. Según Boada y Cardona Montoya (2020), el análisis prospectivo, proporciona herramientas para visualizar escenarios alternativos que permiten a los líderes prepararse para la incertidumbre. Sin embargo, dado que no todas las situaciones pueden ser previstas con exactitud, es necesario complementar esta anticipación con procesos adaptativos. La adaptabilidad continua, asegura que la organización pueda responder rápidamente a situaciones imprevistas sin perder su coherencia estratégica.
            p.mb-0 La integración del pensamiento prospectivo con la flexibilidad organizacional, fortalece la capacidad de los líderes para diseñar estrategias que respondan tanto a  los objetivos a largo plazo como a las contingencias inmediatas, contribuyendo a la sostenibilidad y competitividad de la organización.
          div(numero="2" titulo="Gestión de la incertidumbre y desarrollo de resiliencia") 
            p.mb-0 En sistemas complejos, la incertidumbre es una constante. Morin (2008), sostiene que los fenómenos sociales y organizacionales son no lineales, lo que implica que las relaciones causa-efecto, no siempre son predecibles. En este contexto, los líderes deben desarrollar estrategias resilientes, que no solo permitan resistir las adversidades, sino también aprender y fortalecerse ante los desafíos. La capacidad de gestionar la incertidumbre, se logra mediante la incorporación de herramientas de análisis prospectivo y modelos estratégicos, que contemplen escenarios múltiples, garantizando que la organización mantenga su estabilidad incluso en condiciones adversas.
          div(numero="3" titulo="Innovación estratégica como pilar del cambio") 
            p.mb-1 La innovación estratégica es otro elemento clave para los líderes en entornos complejos. Según Boada y Cardona Montoya (2020), la innovación no solo se refiere a la creación de productos o servicios nuevos, sino también a la transformación de procesos internos y modelos de negocio. El pensamiento sistémico, permite a los líderes identificar puntos de apalancamiento en sus organizaciones, es decir, áreas críticas donde pequeñas intervenciones pueden generar grandes impactos. La innovación estratégica, guiada por el análisis de sistemas, favorece la reconfiguración de estructuras organizacionales y la creación de ventajas competitivas sostenibles.
            p.mb-0 Este enfoque es particularmente relevante en un contexto global, donde las organizaciones deben reinventarse continuamente, para mantenerse vigentes en mercados dinámicos.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/15.png",style="max-width: 400px;")

    .row
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/16.png",style="max-width: 400px;")
      .col-lg-8
        LineaTiempoD.color-primario.large
          div(numero="1" titulo="Aprendizaje organizacional y mejora continua") 
            p.mb-1 Senge (1990) define el aprendizaje organizacional como la capacidad de una organización para reflexionar sobre sus experiencias, tanto exitosas como fallidas, y ajustar sus estrategias en función de estas lecciones. Este proceso de aprendizaje continuo es fundamental en sistemas complejos, donde los errores y las desviaciones forman parte natural del ciclo estratégico. Las organizaciones que desarrollan una cultura de aprendizaje tienen mayor capacidad para innovar y adaptarse, mejorando su desempeño en el tiempo.
            p.mb-0 El #[em feedback] continuo y los sistemas de realimentación, son esenciales para evaluar el progreso y realizar ajustes estratégicos. Estos mecanismos de retroalimentación permiten a los líderes tomar decisiones informadas, basadas en datos objetivos y en el análisis de patrones emergentes.
          div(numero="2" titulo="Toma de decisiones colaborativa en sistemas complejos") 
            p.mb-1 La toma de decisiones en sistemas complejos, requiere la participación de múltiples actores, tanto internos como externos. Senge (1990) destaca que el involucramiento de diferentes niveles de la organización y la inclusión de grupos de interés externos, enriquecen el proceso de decisión, generando estrategias más robustas y coherentes. La colaboración facilita la integración de diversas perspectivas, lo que contribuye a una comprensión más completa de los problemas estratégicos y mejora la calidad de las decisiones adoptadas.
            p.mb-0 Además, la toma de decisiones colaborativa promueve el compromiso y la cohesión en la organización, asegurando que las estrategias formuladas se implementen de manera efectiva y alineada con los objetivos organizacionales.



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
