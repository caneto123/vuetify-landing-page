import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#1ab394",
                secondary: "#6e7c91",
                accent: "#3D87E4"
            }
        }
    }
});
