<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Escenarios híbridos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Los escenarios híbridos son una evolución reciente en el campo de la prospectiva, que combinan elementos de varios tipos de escenarios, como optimista, pesimista y tendencial, en una sola narrativa compleja. Su desarrollo responde a la necesidad de las organizaciones de contar con una mayor flexibilidad y capacidad de adaptación en un entorno donde los cambios ocurren con alta velocidad e incertidumbre. Esta metodología se basa en la teoría de sistemas complejos y se inspira en los trabajos de investigadores como Peter Schwartz, quien introdujo el concepto de escenarios en su obra The Art of the Long View (1991). Schwartz sugirió que la preparación para el futuro requiere considerar múltiples combinaciones de eventos y factores simultáneamente.
        .p-4(style="background-color: #D9EFF8 ")
          p.mb-0 Los escenarios híbridos buscan reflejar la complejidad y la incertidumbre del entorno, combinando características de diversos futuros posibles. A diferencia de los escenarios tradicionales, que se agrupan en categorías bien definidas (optimistas, pesimistas o tendenciales), los híbridos integran elementos mixtos que permiten explorar interacciones dinámicas entre diferentes fuerzas. 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/34.png', alt='')
    .bg-color-1.p-4.mb-5(data-aos="fade-left" style="background-color: #FFF8D5 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/35.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 #[b Ejemplo:] un escenario híbrido podría considerar un crecimiento económico positivo junto con un aumento en la regulación ambiental, o una crisis sanitaria con la adopción acelerada de tecnologías digitales. El propósito es crear un marco estratégico más versátil que permita a las organizaciones ajustar sus planes en tiempo real y con mayor agilidad.
    p.mb-4 Conozcamos el proceso de construcción de escenarios híbridos:
    .bg-full-width.bg-motivo.p-5.mb-5
      .tarjeta.tarjeta--gris.p-4.mb-5
        PasosB.color-acento-contenido
          .row(titulo="Paso 1")
            .col-lg-7.mb-4.mb-md-0
              h4 Identificación de variables críticas
              p Se seleccionan las tendencias y factores que tienen mayor impacto en el contexto estratégico. Estos pueden incluir variables económicas, sociales, tecnológicas o ecológicas.
            .col-lg-5.col-7: img(src='@/assets/curso/temas/36.png', alt='')
          .row(titulo="Paso 2")
            .col-lg-7.mb-4.mb-md-0
              h4 Definición de incertidumbres claves
              p Se establecen las incertidumbres principales que podrían evolucionar en múltiples direcciones.
            .col-lg-5.col-7: img(src='@/assets/curso/temas/37.png', alt='')
          .row(titulo="Paso 3")
            .col-lg-7.mb-4.mb-md-0
              h4 Combinación de elementos de diferentes escenarios
              p Se mezclan factores optimistas, pesimistas y tendenciales para crear narrativas complejas que simulan la interacción de múltiples fuerzas.
            .col-lg-5.col-7: img(src='@/assets/curso/temas/38.png', alt='')
          .row(titulo="Paso 4")
            .col-lg-7.mb-4.mb-md-0
              h4 Evaluación de impactos estratégicos
              p Se analizan las posibles repercusiones de cada escenario híbrido y se diseñan estrategias adaptativas para responder a las combinaciones emergentes.
            .col-lg-5.col-7: img(src='@/assets/curso/temas/39.png', alt='')
          .row(titulo="Paso 5")
            .col-lg-7.mb-4.mb-md-0
              h4 Monitoreo y ajuste continuo
              p Los escenarios híbridos no son estáticos; deben ser revisados y ajustados, con base en la evolución del entorno.
            .col-lg-5.col-7: img(src='@/assets/curso/temas/40.png', alt='')
    p.mb-4 Ahora, los siguientes son algunos ejemplos de escenarios híbridos:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/41.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="1. Industria automotriz")
            p.mb-0 #[b Combinación.] Un escenario considera la rápida adopción de vehículos eléctricos (elemento optimista) con un aumento en los costos de producción, debido a la escasez de materias primas (elemento pesimista).
              br
              br
              |#[b Estrategia.] La empresa invierte en innovación tecnológica para reducir costos y crear alianzas estratégicas que aseguren el suministro de insumos.
          div(titulo="2. Sector educativo")
            p.mb-0 #[b Combinación.] Un escenario híbrido plantea la coexistencia de educación presencial y digital (elemento tendencial) junto con un aumento en la competencia por programas especializados (elemento disruptivo).
              br
              br
              |#[b Estrategia.] Las instituciones diversifican su oferta académica y desarrollan modelos híbridos de enseñanza, combinando plataformas digitales con actividades presenciales personalizadas.
    p.mb-4 Y sus ventajas, limitaciones y aplicaciones, son las siguientes:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Ventajas" :icono="require('@/assets/curso/temas/icono.svg')")(style='background-color:#f4f4f4 ')
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/42.png', alt='')
          .col-md-7
            h4 Ventajas
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Flexibilidad estratégica.] Permite a las organizaciones, prepararse para múltiples combinaciones de eventos, aumentando su capacidad de adaptación.
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Mayor realismo.] Refleja la complejidad del entorno real, donde coexisten aspectos positivos y negativos.

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Innovación y proactividad.] Fomenta la creatividad al combinar escenarios aparentemente contradictorios, impulsando soluciones innovadoras.

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Mejora en la toma de decisiones.] Las decisiones se basan en marcos estratégicos más completos y versátiles.
      .py-4.py-md-5(titulo="Limitaciones" :icono="require('@/assets/curso/temas/icono.svg')")(style='background-color:#f4f4f4 ')
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/43.png', alt='')
          .col-md-7
            h4 Limitaciones
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Complejidad en la construcción.] Requiere un análisis profundo de múltiples variables y su interacción.

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Dependencia del monitoreo continuo.] Es necesario actualizar los escenarios con frecuencia, para asegurar su relevancia.

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Consumo de recursos.] La creación y gestión de escenarios híbridos, puede ser demandante en términos de tiempo y recursos humanos.

      .py-4.py-md-5(titulo="Aplicaciones prácticas " :icono="require('@/assets/curso/temas/icono.svg')")(style='background-color:#f4f4f4 ')
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/44.png', alt='')
          .col-md-7
            h4 Aplicaciones prácticas 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Estrategia corporativa.] Preparación para cambios regulatorios inesperados que afectan el comercio internacional y el desarrollo de productos.

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Política pública.] Creación de planes de respuesta ante emergencias combinadas, como una crisis sanitaria y un desastre natural.

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Innovación tecnológica.] Anticipación del impacto de nuevas tecnologías en mercados emergentes, junto con restricciones regulatorias.
      .py-4.py-md-5(titulo="Ejemplo real de escenario híbrido" :icono="require('@/assets/curso/temas/icono.svg')")(style='background-color:#f4f4f4 ')
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/45.png', alt='')
          .col-md-7
            h4 Ejemplo real de escenario híbrido
            p.mb-0 Durante la pandemia del COVID-19, varias empresas utilizaron escenarios híbridos para anticipar cambios en el mercado. Por ejemplo, en el sector de comercio minorista, se combinó la expectativa de un aumento en las compras en línea (optimista) con la posibilidad de interrupciones en la cadena de suministro (pesimista). Esto permitió que las empresas desarrollaran estrategias flexibles, como fortalecer sus canales de e-commerce  mientras buscaban proveedores alternativos para asegurar el inventario.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .p-4(style="background-color: #FFF8D5 ")
          p.mb-0 Los escenarios híbridos representan una evolución en el análisis prospectivo, al integrar elementos de múltiples futuros posibles en un solo marco estratégico. Su enfoque permite a las organizaciones responder con agilidad ante la incertidumbre y tomar decisiones más informadas en contextos complejos. Al combinar aspectos optimistas, pesimistas y tendenciales, los escenarios híbridos fomentan la innovación estratégica y aumentan la capacidad de adaptación. 
      .col-lg-6.col-7: img(src='@/assets/curso/temas/46.png', alt='')
    .bg-color-1.p-4.mb-5(data-aos="fade-left" style="background-color: #F8DCF6 ")
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/35.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Esta #[b metodología] es especialmente relevante en sectores dinámicos, donde la capacidad de ajustarse rápidamente a las circunstancias es clave para mantener la competitividad. Los escenarios híbridos no solo preparan a las organizaciones para el futuro, sino que les brindan herramientas para liderar e influir en su entorno.
              
            
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/71774/" target="_blank" rel="noopener noreferrer") López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica. Editorial Universo Sur.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.futurespace.es/la-prospectiva-estrategica-y-la-construccion-de-escenarios-de-futuro/" target="_blank" rel="noopener noreferrer") Taver E. (2025) La prospectiva estratégica y la construcción de escenarios de futuro. FutureSpace [Blog]

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/IRYW2H39jXU?si=rIG5aQof4-wslU_y" target="_blank" rel="noopener noreferrer") Edel R. (2020, 31 de mayo) Hibridación de las experiencias educativas: Hacia un modelo eUV. [video] YouTube.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>
