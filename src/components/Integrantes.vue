<template>
  <div class="card" v-for="integrante in integrantes">
    <Card :integrante="integrante" />
  </div>
</template>

<script>
  import Card from './Card.vue'
  export default {
    name: 'Integrantes',
    props: {
      integrantes: Array
    },
    components: {
      Card
    }
  }
</script>