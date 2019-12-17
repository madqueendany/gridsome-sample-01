<template>
  <div v-if="$vuetify.breakpoint.mdAndUp">
    <v-sheet style="position: fixed; bottom: 1.5em; left: 3em">
      <v-navigation>
        <v-list class="pa-0">
          <v-list-item>
            <v-btn icon @click="isLight = !isLight">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item to="/">Home</v-list-item>
          <v-list-item to="/posts">Notes</v-list-item>
          <v-list-item to="/about">About</v-list-item>
        </v-list>
      </v-navigation>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLight: true
  }),
  watch: {
    isLight(val) {
      this.$vuetify.theme.dark = !val;
    }
  }
};
</script>

<style lang="scss">
.v-list-item--link:before,
.v-list-item--active {
  background: transparent !important;
  color: teal !important;
}

</style>
