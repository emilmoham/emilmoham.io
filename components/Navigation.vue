<template>
    <div class="navbar">
        <div class="brand"><nuxt-link :to="`/`">Emil Mohammed</nuxt-link></div>
        <ul class="nav-pages">
            <li><nuxt-link :to="`/blogs`">Archive</nuxt-link></li>
            <li><a href="#">GitHub</a></li>
        </ul>
        <ThemeSelect id="theme-btn"/>
    </div>
</template>

<script>
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;


    padding: 1rem 2rem;
}

.navbar .brand {
    font-weight: 600;
    font-size: 1.25rem;
}
.navbar .brand a {
    text-decoration: none;
    color: var(--color);
}

.navbar ul {
    list-style-type: none;
    
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
}

.navbar ul li {
    padding: 0 1rem;

}

.navbar ul li a {
    text-decoration: none;
}

#theme-btn {
    margin-left: auto;
}

</style>