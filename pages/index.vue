<template>
  <main>
    <Navigation />
    <img src="@/assets/images/skyline.jpg" class="banner" />
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
        title: "Emil Mohammed's Blog",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'A place for me to yell into the void'
          }
        ]
      }
    }
  }
</script>

<style>
.banner {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: bottom right;
  background-color: #E4A28E;
}

.container {
  padding: 0rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

</style>