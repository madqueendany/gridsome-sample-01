<template>
  <Layout>
    <v-sheet class="layout flex-column justify-center" height="80vh">
      <g-image alt="Example image" src="~/favicon.png" width="135" />

      <h1>Hello, world!</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>

      <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
          >Gridsome Docs</a
        >
        <a
          href="https://github.com/gridsome/gridsome"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </p>
    </v-sheet>

    <v-sheet height="95vh" color="teal lighten-5"></v-sheet>
    <v-sheet height="95vh" color="orange lighten-5"></v-sheet>
    <v-sheet height="95vh" color="purple lighten-5"></v-sheet>
    <v-sheet height="95vh" color="pink lighten-5"></v-sheet>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
