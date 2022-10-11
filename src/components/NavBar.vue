<template>
  <header class="container-nav">
    <RouterLink to="/" @click="$emit('inicio-login')"><button id="nav-btn">Inicio</button></RouterLink>
    <nav>
      <ul class="container-links">
        <li><RouterLink to="/bloques">Bloques</RouterLink></li>
        <li v-if="!showProfile && !showRegister">
          <RouterLink to="/users/login" @click="$emit('show-register')">Iniciar sesion</RouterLink>
        </li>
        <li v-if="!showProfile && showRegister">
          <RouterLink to="/users/register" @click="$emit('show-register')">Registrarse</RouterLink>
        </li>
        <li v-if="showProfile">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li v-if="showProfile"><a href="#">Publicaciones</a></li>

        <li v-if="showProfile">
          <a id="profile-link" href="#">Perfil</a>
          <ul class="menu-vertical">
            <li><br>¡Bienvenido!</li>
            <li><a href="#">Ver mi perfil</a></li>
            <li><a href="#">Cerrar sesion</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <RouterLink class="container-logo" to="/"><img id="nav-logo" src="https://i.postimg.cc/MHRb3QWv/inemaps-nav-logo2.png"
        alt="Inemaps Logo"></RouterLink>
  </header>
</template>

<script>
  import { RouterLink } from 'vue-router';

  export default {
    name: 'NavBar',
    components: {
      RouterLink
    },
    props: {
      showProfile: Boolean,
      showRegister: Boolean,
    }
  }
</script>

<style scoped>
.container-nav {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 2vw;
  background-color: var(--p-black);
  box-shadow: 0 0 40px #0d0d0d;
  z-index: 111;
}

.container-logo {
  cursor: pointer;
  margin-left: auto;
}

.container-links {
  list-style: none;
}

.container-links li {
  display: inline-block;
  padding: 0px 20px;
}

.container-links li a {
  transition: all 0.6s ease 0s;
}

.container-links li a:hover {
  transition: all 0.3s ease 0s;
  color: var(--p-green);
}

/*Submenu*/
#profile-link {
    cursor: default;
}

.menu-vertical{
	position: absolute;
	display: none;
	list-style: none;
	width: 200px;
	background-color: #1b1d24b7;
}
.container-links li:hover .menu-vertical{
	display: block;
}

.menu-vertical li a{
	display: block;
	color: white;
	text-decoration: none;
	padding: 15px 15px 15px 20px;
}


</style>