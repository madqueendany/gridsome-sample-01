<template>
  <Post>
    <v-sheet
      class="d-flex flex-column pt-12 layout"
      :class="$vuetify.breakpoint.name"
      height="100vh"
    >
      <div class="markdown-body" v-html="$page.post.content" />
    </v-sheet>
  </Post>
</template>

<page-query>
query Path($path: String!) {
  post (path: $path) {
    id
    path
    title
    timeToRead
    content
    excerpt
    headings {
      value
    }
  }
}
</page-query>

<script>
import Post from "~/layouts/Post.vue";
export default {
  computed: {
    vuetify() {
      return this.$vuetify.theme;
    }
  },
  components: { Post }
};
</script>

<style lang="scss">
// .content-right {
//   padding-left: 30%;
// }

pre {
  code {
    width: 100%;
    padding: 8px;
    box-shadow: none !important;
  }
}
</style>
