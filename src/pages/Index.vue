<template>
  <Layout>
    <v-sheet
      class="d-flex flex-column pt-12 content-right"
      :class="$vuetify.breakpoint.name"
      height="100vh"
    >
      <g-image alt="Example image" src="~/favicon.png" width="135" />
      <h1 class="text-jumbo">Lorem ipsum dolor sit</h1>
      <p style="max-width: 40em">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero
        eveniet voluptatibus odio fuga incidunt laborum nobis? Illum error nihil
        deleniti amet eum rem fugit magni atque. Rem, dolorem ea.
      </p>
    </v-sheet>
    <v-sheet class="flex-grow-1" height="95vh"></v-sheet>
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

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}


</style>
