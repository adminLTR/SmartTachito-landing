const content = [
  {
    title: 'SmartTachito',
    content: `
    <p>
        SmartTachito es un prototipo de tacho futurista, que utiliza tecnologias
        de Inteligencia Artificial e Internet de las Cosas para la detección y clasificación
        de residuos.
    </p>
    <p>
        El tacho es capaz de clasificar por si solo los residuos por plasticos, cartones,
        vidrios, papeles, residuos generales, etc. Facilitando así la labor del usuario de 
        tener que clasificar manualmente sus residuos.
    </p>
    `
  },
  {
    title: 'SmartTachito',
    content: `
    <p>
        Desde sus inicios en el 2023, el prototipo ha pasado por varias versiones a lo largo de su desarrollo 
        y ha estado en constante estudio. En las cuales 
        no solo aumentaria su tamaño, sino también sus funcionalidades y mejoras.
    </p>
    `
  },
  {
    title: 'San Marcos Circular Challenge',
    content: `
    <p>
        La primera versión del prototipo fue desarrollada para el San Marcos Circular Challenge 
        de la <b class="text-main">Incubadora de Empresas 1551</b> en la UNMSM el 2023.
    </p>
    <p>
        Después de 3 arduos días de trabajo, el proyecto ganó el primer puesto en la competencia, 
        siendo un proyecto que combinaba la Inteligencia Artificial y el IoT para el desarrollo sostenible y 
        economía circular.
    </p>
    `
  },
  {
    title: 'Make IT Happen',
    content: `
    <p>
        SmartTachito también fue uno de los proyectos finalistas del Make IT Happen organizado por 
        el <b class="text-main">Innovation Lab</b> de la UNI en el 2024.
    </p>
    <p>
        Fue en esta etapa donde se desarrolló una versión mejorada del prototipo, agregandole funcionalidades 
        tanto a nivel de software como de hardware, optimizando el código y corrigiendo fallas.
    </p>
    `
  },
  {
    title: 'DemoDay FISI 2024',
    content: `
    <p>
        Dado que algunas funcionalidades del prototipo fueron desarrolladas como parte de algunos cursos 
        de la carrera, el proyecto fue exhibido en la DemoDay de la <b class="text-main">Facultad de 
        Ingeniería de Sistemas e Informática</b> de la UNMSM el 2024.
    </p>
    `
  },
  {
    title: 'Entorno Real',
    content: `
    <p>
        También en 2024, el proyecto fue probado en un entorno real con alumnos escolares de 
        3ro de secundaria de la <b class="text-main">I.E.E. Hipolito Unanue</b> el 2024, donde ellos pudieron 
        contemplar el funcionamiento de este y utilizarlo.
    </p>
    <p>
        Esto fue una actividad divulgativa para conscientizar a los jovenes acerca de la importancia del 
        reciclaje y el cuidado del medio ambiente a través de la tecnología.
    </p>
    `
  },
  {
    title: 'Colaboradores',
    content: `
    <p>
        El proyecto ha sido desarrollado por <b class="text-main">José Luis La Torre Romero</b> y 
        <b class="text-main">Jorge Jesús Quispe Villaverde</b> durante el 4to ciclo de la carrera de 
        Ingeniería de Software en la UNMSM.
    </p>
    `
  },
]
document.addEventListener("load", function () {
  document.querySelector("#home-content h2").textContent = content[0].title;
  document.querySelector("#home-content div").innerHTML = content[0].content;

    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChange(s) {
            const index = s.activeIndex;
            document.querySelector("#home-content h2").textContent = content[index].title;
            document.querySelector("#home-content div").innerHTML = content[index].content;

          },
        },
    });
}, true)