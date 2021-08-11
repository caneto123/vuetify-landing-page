<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="6" class="hidden-xs-only">
              <v-img
                src="@/assets/img/pc2.png"
                class="d-block ml-auto mr-auto"
                max-width="600px"
              />
            </v-col>
            <v-col cols="12" sm="6" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">
                Comience a reemplazar sus hojas de cálculo desordenadas
              </h1>
              <h1 class="font-weight-light">
                Envíe a todos sus clientes sus recomendaciones y planes de
                alimentación, comuníquese de forma segura con ellos y mejoren
                los resultados juntos.
              </h1>
              <v-btn
                rounded
                outlined
                href="https://github.com/caneto123/my-app"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/background3.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>
