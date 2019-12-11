<template>
  <Layout>
    <div class="markdown-body" v-html="$page.post.content" />
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
export default {};
</script>

<style></style>
