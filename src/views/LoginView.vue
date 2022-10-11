<template>
  <main>
    <div class="main-background minimum-sizes all">
      <div class="login-container">
        <div class="login-text">
          <h1>Iniciar sesion</h1>
          <p>Solo funciona con cosas de Daniel pq no hay db jaja</p>
          <ul>
            <li>
              <p>{{ logMensaje }}</p>
            </li>
          </ul>
        </div>

        <div class="login-inputs">
          <form @submit="onSubmit" method="POST">
            <div>
              <input class="simple-text dark input-text" type="email" name="email" id="email" placeholder="Correo"
                autofocus required v-model="email"/>
            </div>
            <div>
              <input class="simple-text dark input-text" type="password" name="password" id="password"
                placeholder="Contraseña" required v-model="password"/>
            </div>
            <div>
              <button type="submit" id="login-btn">Iniciar sesion</button>
            </div>
            <p>
              ¿No tienes una cuenta?
              <RouterLink to="/users/register" @click="$emit('show-register')"><span>Registrate aqui</span></RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import '../assets/login-register.css'
  import { logeo } from '../ob.js';
  export default {
    name: 'Login',
    components: {
      RouterLink
    },
    data() {
      return {
        email: '',
        password: '',
        logMensaje: '',
      }
    },
    methods: {
      onSubmit(form) {
        form.preventDefault()
        let logStatus = false
        logeo.forEach((log) => {
          if (log.pass === this.password && log.email === this.email) {
            this.logMensaje = 'Iniciaste sesion correctamente :D'
            logStatus = true
          } else {
            if (!logStatus) {
              this.logMensaje = 'Ingresa bien tus datos D:'
            }
          }
        })
        this.email = ''
        this.password = ''
      }
    }
  }
</script>