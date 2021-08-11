<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center" class="my-10">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-1 mb-3 primary--text my-5">
                Diga adiós a los registros en papel y configure a sus clientes
                con una aplicación web
              </h1>
              <p class="blue-grey--text">
                Envíe a todos sus clientes sus recomendaciones y planes de
                alimentación, comuníquese de forma segura con ellos y mejoren
                los resultados juntos.
              </p>

              <p class="blue-grey--text">
                Esto es no que podrá hacer con Nutrium:
              </p>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/check-green.svg"
                    max-width="30px"
                    class="mr-4"
                  />
                  <p class="text-justify blue-grey--text">
                    Actualice sus recomendaciones sobre el terreno;
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/check-green.svg"
                    max-width="30px"
                    class="mr-4"
                  />
                  <p class="text-justify blue-grey--text">
                    Manténgase actualizado con su progreso;
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/check-green.svg"
                    max-width="30px"
                    class="mr-4"
                  />
                  <p class="text-justify blue-grey--text">
                    Reduzca las ausencias con recordatorios;
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/check-green.svg"
                    max-width="30px"
                    class="mr-4"
                  />
                  <p class="text-justify blue-grey--text">
                    Comprende sus luchas diarias.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/smartphoneSc.svg"
                class="d-block ml-auto mr-auto"
                max-width="250px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
