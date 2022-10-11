<template>
  <img :src="integrante.imagen" :alt="integrante.nombre">
  <div class="card-contenido">
    <h3>{{ integrante.nombre }}</h3>
    <p>
      {{ integrante.heading }}
    </p>
    <div class="social-container">
      <a :href="integrante.gitHub" target="_blank" class="fa fa-github"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    integrante: Object,
  }
}
</script>