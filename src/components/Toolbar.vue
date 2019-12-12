<template>
  <v-sheet class="mb-4">
    <v-app-bar flat>
      <v-toolbar-title>
        <g-link to="/">Gridsome with Vuetify</g-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/posts">Notes</v-btn>
        <v-btn text to="/about">About</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon @click="isLight = !isLight">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    isLight: true
  }),
  watch: {
    isLight(val) {
      this.$vuetify.theme.dark = !val;
      console.log('this.$vuetify.theme.isDark->', this.$vuetify.theme.isDark) // eslint-disable-line no-console
    }
  }
};
</script>

<style></style>
