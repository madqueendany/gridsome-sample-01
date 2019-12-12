// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'prismjs/themes/prism.css'
import DefaultLayout from "~/layouts/Default.vue";

// import colors from 'vuetify/lib/util/colors'


export default function(Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });

  Vue.use(Vuetify);

  const opts = {
    icons: { iconfont: 'mdiSvg' },
    // theme: {
    //   themes: {
    //     light: {
    //       primary: colors.teal,
    //       secondary: colors.grey.darken1,
    //       accent: colors.shades.black,
    //       error: colors.red.accent3,
    //       background: colors.indigo.lighten5 // Not automatically applied
    //     },
    //     dark: {
    //       primary: colors.blue.lighten3,
    //       background: colors.indigo.base // If not using lighten/darken, use base to return hex
    //     }
    //   }
    // }
  };

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
