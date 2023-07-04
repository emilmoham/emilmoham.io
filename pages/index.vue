<template>
  <main>
    <Navigation />
    <img src="@/assets/images/skyline.jpg" class="banner" />
    <div class="container">
      <BlogCard v-for="blog in blogs" :blog="blog" />
    </div>
  </main>
</template>

<script setup>
  const { data: blogs } = await useAsyncData('home', () => queryContent('/blogs').limit(3).sort({ publishOn: -1}).find());

  useHead({
    title: 'Home | Emil Mohammed',
    meta: [
        {name: 'description', content: 'A place for me to yell into the void'},
    ]
  });
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 960px)
{
  .container {
    margin: 0px auto;
    max-width: 860px;
    justify-content: left;
  }
}

</style>