<template>
  <Layout>
    <div class="layout markdown-body" v-html="$page.post.content" />
  </Layout>
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
export default {
  computed: {
    vuetify() {
      return this.$vuetify.theme
    }
  }
};
</script>

<style lang="scss">
pre {
  code {
    width: 100%;
    padding: 8px;
    box-shadow: none !important;
  }
}
</style>
