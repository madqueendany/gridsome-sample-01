<template>
  <Layout>
    <v-sheet
      class="d-flex flex-column pt-12 content-right"
      :class="$vuetify.breakpoint.name"
      height="100vh"
    >
      <h1 class="text-jumbo">About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </v-sheet>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
    meta: [{ name: "about us" }]
  }
};
</script>
