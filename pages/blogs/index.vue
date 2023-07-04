<template>
  <main>
    <Navigation />
    <div class="container">
      <BlogCard v-for="blog in blogs" :key="blog.slug + blog.createdAt" :blog="blog" />
    </div>
  </main>
</template>

<script setup>
  const { data: blogs } = await useAsyncData('home', () => queryContent('/blogs').find());

  useHead({
    title: 'Archive | Emil Mohammed',
    meta: [
        {name: 'description', content: 'My full archive of blog posts.'},
    ]
  });
</script>

<style scoped>
.container {
  padding: 0rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


@media (min-width: 960px)
{
  .container {
    margin: 0px auto;
    justify-content: center;
    max-width: 900px;
  }
}

</style>