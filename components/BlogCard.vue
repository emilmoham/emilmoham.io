<template>
    <div class="blog-card">
      <div class="thumbnail">
        <img :src="blog.cover_image" alt="thumbnail"/>
      </div>
      <div class="detail">
        <div class="header">
          <p class="blog-date">{{ blog.date }}</p>
          <h1 class="blog-title"><NuxtLink :to="`${blog._path}`">{{ blog.title }}</NuxtLink></h1>
        </div>
        <p class="blog-desciption">
          {{ 
            blog.description.substring(0,150)
          }}...
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            blog: Object,
        },
    }
</script>

<style scoped>
.blog-card {
  margin: 2rem 10px;
  border: 2px solid var(--border-color);

  box-shadow:-1px 1px 1px 0 var(--bg-secondary);

  display: flex;
  flex-direction: column;

  max-width: 260px;
}

.thumbnail {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.thumbnail img {
  width: 100%;
  display: block;
  max-width: 480px;
  max-height: 320px;
}

.detail {
  padding: 1rem;
}

.header h1 {
  margin: 0;
  padding: 0;
}

.header  a {
  text-decoration: none;
}

.header  .blog-date {
  margin: 0;
  font-size: 0.7rem;
}
</style>