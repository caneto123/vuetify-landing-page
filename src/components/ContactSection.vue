<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Contáctenos</h1>
              <h3 class="font-weight-light mt-3">
                Ingresá tus datos y te contactamos o si preferís llamanos al 098 XX XX XX y te asesoramos.
              </h3>
              <!-- <h3 class="font-weight-light mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <h3 class="font-weight-light mt-3">
                Telefone: +598 14 07 14
              </h3> -->
              <h3 class="font-weight-light mt-3">
                Email: EduardoYChristian@gmail.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nombre"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Teléfono"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  label="Mensaje"
                  required
                />

                <v-btn
                  :enable="!valid"
                  color="#171b34"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3 "
                  @click="submit"
                  
                >
                <span class="test"
                
                >Enviar</span>
                  
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.test{
  color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations () {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email } // Matches this.contact.email
      }
    }
  }
}
</script>


// <script>
// import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Este campo es obligatorio",
      (v) => (v && v.length >= 6) || "El nombre precisa tener más de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Este campo es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "EL E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "Este campo es obligatorio",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: "",
      color: "",
    },
  }),
  methods: {
    submit() {
      /*db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })*/
    },
  },
};
</script>
