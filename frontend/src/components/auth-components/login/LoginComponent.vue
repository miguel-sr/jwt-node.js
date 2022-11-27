<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border"
          style="margin-top: 70px; height: auto; padding-top: 50px !important;"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
        <h1 class="display-4">Painel de Login:</h1><br>
        <!-- INÍCIO BLOCO: E-mail -->
          <label for="email">E-mail:
            <div class="form-group">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Digite o seu e-mail"
                v-model="loginForm.email"
                :class="{'is-invalid': isSubmitted && $v.loginForm.email.$error}"
              >
              <div v-if="isSubmitted && !$v.loginForm.email.required" class="invalid-feedback">
                O campo e-mail é obrigatório!
              </div>
            </div>
          </label><br>
        <!-- FIM BLOCO: E-mail -->

        <!-- INÍCIO BLOCO: Password -->
          <label for="password" class="mt-3">Senha:
            <div class="form-group">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Digite sua senha"
                v-model="loginForm.password"
                :class="{'is-invalid': isSubmitted && $v.loginForm.password.$error}"
              >
              <div v-if="isSubmitted && !$v.loginForm.password.required" class="invalid-feedback">
                O campo senha é obrigatório!
              </div>
            </div>
          </label>
        <!-- FIM BLOCO: Password -->

        <p class="center mt-3">
          Não tem uma conta?
          <router-link to="/register">Cadastre-se</router-link>
        </p>

        <!-- FIM BLOCO: Submit -->
          <center>
            <button @click="submitLoginUser" class="btn btn-primary btn-block w-50 my-2">
              Login
            </button>
          </center>
        <!-- FIM BLOCO: Submit -->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="" scoped>
  label {
    width: 50%;
    text-align: left;
  }
</style>
