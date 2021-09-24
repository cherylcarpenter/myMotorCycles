import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#5f8ee4',
                secondary: '#e4655f',
                accent: '#8c9eff',
                error: '#b71c1c',
                offblack: '#19191a',
                grey: '#e6e6e6',
            },
            light: {},
        },
    },
});
