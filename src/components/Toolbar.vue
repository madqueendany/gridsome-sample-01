<template>
  <div v-if="$vuetify.breakpoint.mdAndUp">
    <v-sheet style="position: fixed; bottom: 1.5em; left: 3em">
      <nav>
        <v-list class="pa-0">
          <v-list-item>
            <v-btn icon @click="$store.commit('switchTheme')">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item to="/">Home</v-list-item>
          <v-list-item to="/posts">Notes</v-list-item>
          <v-list-item to="/about">About</v-list-item>
        </v-list>
      </nav>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    switchTheme() {
      store.commit('switchTheme')
    }
  },

  computed: {
    ...mapState(['isLight'])
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
