<template>
  <Layout>
    <h1>Notes</h1>
    <template v-for="post in $page.posts.edges">
      <div :key="post.node.id">
        <g-link :to="post.node.path">
          <h3>{{ post.node.title }}</h3>
        </g-link>
        <hr />
      </div>
    </template>
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
