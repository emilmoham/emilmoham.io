<template>
  <main>
    <Navigation />
    <div class="container">
      <BlogCard v-for="blog in blogs" :key="blog.slug + blog.createdAt" :blog="blog" />
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({$content}) {
      const blogs = await $content("blogs").sortBy("publishOn", "desc").fetch();
      return {
        blogs
      }
    },
    head() {
      return {
        title: "Read interesting stories as a nomad",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Daily and juicy content as you learn, work, and relax. WFH'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 0rem 2rem;
}

</style>