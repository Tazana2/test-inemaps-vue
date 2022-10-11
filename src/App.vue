<template>
  <NavBar :showProfile="showProfile" :showRegister="showRegister" @show-register="toggleShowRegister" @inicio-login="showRegister = false"/>
  <RouterView @show-register="toggleShowRegister" :integrantes="integrantes"/>
  <Footer />
</template>


<script>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  import { integrantesA } from './ob.js';

  export default {
    name: 'App',
    components: {
      RouterView,
      NavBar,
      Footer
    },
    data() {
      return {
        showProfile: false,
        showRegister: false,
        integrantes: integrantesA
      }
    },
    methods: {
      toggleShowRegister() {
        this.showRegister = !this.showRegister
        console.log(this.showRegister);
      }
    }
  }
</script>