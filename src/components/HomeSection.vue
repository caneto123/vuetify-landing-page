<template>
  <section id="hero">
    <v-parallax dark src="@/assets/img/background2.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8" font-size="96">
              <h1 class="font-weight-light textOne" xl="8">
                <strong
                  >El único software que necesitas para empezar tu plan
                  alimentación</strong
                >
              </h1>
              <p>
                Nutrium es un software de nutrición para que los profesionales
                administren sus negocios mientras se enfocan en el éxito de sus
                clientes.
              </p>
              <div class="row">
                <v-btn
                  rounded
                  outlined
                  large
                  dark
                  @click="$vuetify.goTo('#features')"
                  class="mt-5"
                >
                  Saber mas...
                  <v-icon class="ml-2">mdi-arrow-down</v-icon>
                </v-btn>
                <div class="video d-flex align-center py-4 mx-5">
                  <a @click.stop="dialog = true" class="playBut">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                      x="0px"
                      y="0px"
                      width="60px"
                      height="60px"
                      viewBox="0 0 213.7 213.7"
                      enable-background="new 0 0 213.7 213.7"
                      xml:space="preserve"
                    >
                      <polygon
                        class="triangle"
                        id="XMLID_18_"
                        fill="none"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        points="73.5,62.5 148.5,105.8 73.5,149.1 "
                      />

                      <circle
                        class="circle"
                        id="XMLID_17_"
                        fill="none"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                      />
                    </svg>
                  </a>
                  <p class="subheading ml-2 mb-0">Ver video</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
              <v-img
                src="@/assets/img/doll.png"
                class="d-block ml-auto mr-auto"
                max-width="600px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card mt-6"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular primary--text">
                    {{ feature.title }}
                  </h1>
                  <h4 class="font-weight-regular subtitle-1 blue-grey--text">
                    {{ feature.text }}
                  </h4>
                  <v-btn class="my-5" elevation="2" color="#ea9f77">
                    <span class="white--text">Leer mas</span>
                  </v-btn>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube
          :video-id="videoId"
          @ready="ready"
          @playing="playing"
        ></youtube>
      </v-card>
    </v-dialog>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon1Sb.png"),
          title: "Administre su plan de alimentación en línea",
          text:
            "Trabaje desde cualquier lugar y mantenga todos los datos de sus clientes seguros con nuestros registros médicos electrónicos y funciones de telesalud.",
        },
        {
          img: require("@/assets/img/icon2Sb.png"),
          title: "Olvídese del papel con nuestra aplicación móvil",
          text:
            "Ofrezca a sus clientes nuestra aplicación móvil para enviar todas sus recomendaciones y comprobar cómo están trabajando sus clientes hacia sus objetivos.",
        },
        {
          img: require("@/assets/img/icon3Sb.png"),
          title: "Gana tiempo para cosas importantes",
          text:
            "Nutrium se encarga del análisis nutricional de los diarios y planes de alimentación y calcula las necesidades nutricionales de los clientes.",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
section {
  position: relative;
}

#hero {
  z-index: 0;
}

.textOne {
  font-size: 3rem;
  font-family: unquote("Roboto");
}
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}

.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 200px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-top: 10px;
  margin-bottom: 20px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-30px);
  transition: 0.5s ease-out;
}
</style>
