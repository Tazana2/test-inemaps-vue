<template>
  <main>
    <section class="sobre-nosotros main-background">
      <div class="description">
        <div class="description-text">
          <h1 class="main-title">
            Inemaps
          </h1>
          <p class="simple-text">Somos una página web enfocada a la orientación dentro de la Institución Educativa
            INEM
            José Félix de Restrepo, en una vista se puede visualizar cada bloque de la institución e
            información importante dentro de ellos como la ubicación de las aulas y el núcleo al que
            pertenece.
            También contamos con un espacio de comunicación e interacción entre los estudiantes pertenecientes a
            la
            institución.</p>
        </div>
        <div class="description-logo">
          <img id="home-logo" src="https://i.postimg.cc/R0z1ky3x/Mainlogo-Inemaps.png">
        </div>
      </div>
    </section>
    <section class="team">
      <div class="team-descripcion">
        <h1 class="main-title">Equipo</h1>
        <p class="simple-text">El equipo de desarrollo de Inemaps está conformado por cinco estudiantes de la
          Institución Educativa INEM José Félix de Restrepo con el fin de culminar con éxito el proyecto de grado que
          demuestre las competencias alcanzadas durante el medio técnico en programación.
        </p>
      </div>
      <div class="integrantes">
        <Integrantes :integrantes="integrantes"/>
      </div>
    </section>
  </main>
</template>

<script>
    import '../assets/index.css'
    import Card from '../components/Card.vue'
    import Integrantes from '../components/Integrantes.vue'
    export default {
      name: 'Home',
      props: {
        integrantes: Array
      },
      components: {
        Card,
        Integrantes
      }
    }
</script>