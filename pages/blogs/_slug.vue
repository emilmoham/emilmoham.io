<template>
    <main>
      <Navigation />
      <div class="blog">
        <h1 class="blog-title">{{ note.title }}</h1>
        <img :src="note.cover_image" />
        <nuxt-content :document="note" />
      </div>
    </main>
</template>
<script>
export default {
    async asyncData({$content, route}) {
        const note = await $content(`blogs/${route.params.slug}`).fetch()
        return {
            note
        }
    }
}
</script>

<style>
.blog {
  margin: 0rem 2rem;
}

.blog h1 {
  color: var(--color-primary);
}

.blog h2 {
  color: var(--color-primary);
}

.blog h3 {
  color: var(--color-primary);
}


.blog h4 {
  color: var(--color-primary);
}

.blog h5 {
  color: var(--color-primary);
}

.blog h6 {
  color: var(--color-primary);
}

.blog img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

@media (min-width: 1000px) {
  .blog {
    margin: 0rem auto;
    max-width: 950px;
  }
}
</style>