<template>
  <Layout>
    <v-sheet
      class="d-flex flex-column pt-12 content-right"
      :class="$vuetify.breakpoint.name"
      height="100vh"
    >
      <h1 class="text-jumbo">Notes</h1>
      <v-list class="pa-0">
        <template v-for="post in $page.posts.edges">
          <v-list-item :key="post.node.id" :to="post.node.path">
            <h3>{{ post.node.title }}</h3>
          </v-list-item>
        </template>
      </v-list>
    </v-sheet>
  </Layout>
</template>

<page-query>
query  {
  posts: allPost {
    edges {
      node {
        id
        title
        content
        slug
        path
			}
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style></style>
