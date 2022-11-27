<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border"
          style="margin-top: 70px; height: auto; padding-top: 50px !important;"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
        <h1 class="display-4">Painel de Cadastro:</h1><br>
        <!-- INÍCIO BLOCO: Nome -->
          <label for="name">Nome:
            <div class="form-group">
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Digite o seu nome"
                v-model="registerForm.name"
                :class="{'is-invalid': isSubmitted && $v.registerForm.name.$error}"
              >
              <div
                v-if="isSubmitted && !$v.registerForm.name.required"
                class="invalid-feedback"> O campo nome é obrigatório!
              </div>
            </div>
          </label><br>
        <!-- FIM BLOCO: Nome -->

        <!-- INÍCIO BLOCO: E-mail -->
          <label for="email" class="mt-3">E-mail:
            <div class="form-group">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Digite o seu e-mail"
                v-model="registerForm.email"
                :class="{'is-invalid': isSubmitted && $v.registerForm.email.$error}"
              >
              <div
                v-if="isSubmitted && !$v.registerForm.email.required"
                class="invalid-feedback">
                <span v-if="!v.registerForm.email.required">
                  O campo e-mail é obrigatório!
                </span>
                <span v-if="!v.registerForm.email.email">
                  E-mail inválido!
                </span>
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
                v-model="registerForm.password"
                :class="{'is-invalid': isSubmitted && $v.registerForm.password.$error}"
              >
              <div
                v-if="isSubmitted && !$v.registerForm.password.required"
                class="invalid-feedback">
                <span v-if="!v.registerForm.password.required">
                  O campo senha é obrigatório!
                </span>
                <span v-if="!v.registerForm.password.minLength">
                  A senha deve conter pelo menos 8 caracteres!
                </span>
              </div>
            </div>
          </label>
        <!-- FIM BLOCO: Password -->

        <p class="center mt-3">
          Já possui uma conta?
          <router-link to="/">Login</router-link>
        </p>

        <!-- FIM BLOCO: Submit -->
          <center>
            <button @click="submitRegisterUser" class="btn btn-primary btn-block w-50 my-2">
              Cadastrar
            </button>
          </center>
        <!-- FIM BLOCO: Submit -->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style src="" scoped>
  label {
    width: 50%;
    text-align: left;
  }
</style>
