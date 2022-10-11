<template>
  <main>
    <div class="main-background minimum-sizes all">
      <div class="login-container">
        <div class="login-text">
          <h1>Registrarse</h1>
          <!-- <ul>
            <% if(typeof errors !='undefined' ) { %>
              <% errors.forEach(error=> { %>
                <li>
                  <%= error.message %>
                </li>
                <% }) %>
                  <% } %>
          </ul> -->
        </div>

        <div class="login-input">
          <form action="/users/register" method="POST">
            <div>
              <input class="simple-text dark input-text" type="number" name="id" id="id"
                placeholder="Codigo de estudiante" required>
            </div>
            <div>
              <input class="simple-text dark input-text" type="text" name="name" id="name" placeholder="Nombre"
                size="35" autofocus required>
            </div>
            <div>
              <input class="simple-text dark input-text" type="email" name="email" id="email" placeholder="Correo"
                size="35" required>
            </div>
            <div>
              <input class="simple-text dark input-text" type="password" name="password" id="password"
                placeholder="Contraseña" size="35" required>
            </div>
            <div>
              <input class="simple-text dark input-text" type="password" name="password2" id="password2"
                placeholder="Confirmar contraseña" size="35" required>
            </div>
            <div>
              <button type="submit" id="login-btn">Registrarse</button>
            </div>
            <p>
              ¿Ya estas registrado? 
              <RouterLink to="/users/login" @click="$emit('show-register')"><span>Inicia sesion aqui</span></RouterLink>
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
  export default {
    name: 'Register',
    components: {
      RouterLink
    }
  }
</script>