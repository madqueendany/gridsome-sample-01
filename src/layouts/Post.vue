<template>
  <v-app id="main">
    <toolbar />

    <main>
      <v-sheet>
        <slot />
      </v-sheet>
    </main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  navLinks: allPage {
    path
  }
}
</static-query>

<script>
import Toolbar from "~/components/Toolbar.vue";
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  components: { Toolbar },
  methods: {}
};
</script>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.theme--light.v-application {
  background: none;
}

// .content-right {
//   padding-left: 3em;

//   &.xs,
//   &.sm {
//     padding: 1.5em;
//   }
// }

.text-jumbo {
  font-size: 8vw;
}
/* vuetify overrides */
</style>
