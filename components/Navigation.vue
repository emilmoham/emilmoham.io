<template>
    <div class="navbar">
        <div class="brand"><nuxt-link :to="`/`">Emil Mohammed</nuxt-link></div>
        <div class="expanded-menu">
            <ul class="horizontal-menu">
                <li class="nav-link"><NuxtLink :to="`/blogs`">Archive</NuxtLink></li>
                <li class="nav-link"><a href="#">GitHub</a></li>
            </ul>
            <ThemeSelect id="theme-btn"/>
        </div>
        <div class="collapsed-menu">
            <div class="button" @click="toggleMenuActive()">
              <Hamburger />
            </div>
            <ul class="dropdown" :class="{active: isActive }">
                <li class="nav-link"><NuxtLink :to="`/blogs`">Archive</NuxtLink></li>
                <li class="nav-link"><a href="#">GitHub</a></li>
                <li><a @click="togglePreference()"><LightIcon/></a></li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    import Hamburger from '@/assets/icons/hamburger.svg?component'
    import LightIcon from '@/assets/icons/light.svg?component'

    export default {
        components: {
            Hamburger,
            LightIcon
        },
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            toggleMenuActive() {
                this.isActive = !this.isActive;
            },
            togglePreference() {
                const colorMode = useColorMode();
                if(colorMode.unknown) {
                    return;
                }
                colorMode.preference = colorMode.value === "light" ? "dark" : "light";
            }
        }
    }
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    height: auto;
}

.navbar .brand {
    font-weight: 600;
    font-size: 1.25rem;
    width: 100%;
    min-width: 175px;
}
.navbar .brand a {
    text-decoration: none;
    color: var(--color);
}

.navbar .expanded-menu {
    display: none;

    flex-direction: row;
    width: 100%;
}

.navbar .horizontal-menu {
    list-style-type: none;
    
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
}

.navbar .horizontal-menu li {
    padding: 5px 1rem 0 1rem;

}

.navbar .horizontal-menu li a {
    text-decoration: none;
}

.navbar .dropdown.active{
    display: block;
}

.navbar .dropdown {
    display: none;

    list-style-type: none;
    
    padding: 0;
    margin: 0;
}

.navbar .collapsed-menu {
    text-align: right;
}

.navbar .dropdown li {
    text-align: right;
}

.navbar .dropdown li a {
    text-decoration: none;
    color: var(--color-primary);

    display: block;
    min-width: 150px;

    margin: 1rem 0rem;

    cursor: pointer;
}

.navbar .dropdown li a svg{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-top: 3px;
}


#theme-btn {
    margin-left: auto;
}

.button {
    position: relative;
    transition: all 0.1s ease;
    top: 0;

    padding: 7px;
    background-color: var(--bg);
    border: 1px solid var(--color);
    
    border-radius: 5px;
    display: inline-block;
    width: fit-content;

    cursor: pointer;

    width: 20px;
    height: 20px;
}

.feather {
    position: relative;
    top: 0px;
    padding: 0;
    margin: 0 2px;

    stroke: var(--color);
    fill: var(--color);
    width: auto;
    height: 100%;
}

.button:hover {
    top: -3px;
}

.feather.preferred {
    border-color: var(--color-primary);
    top: -3px;
}

.feather.selected {
    color: var(--color-primary);
}

@media (min-width: 480px) {
    .navbar .brand {
        width: auto;
    }

    .navbar .expanded-menu  {
        display: flex;
    }

    .navbar .collapsed-menu {
        display: none;
    }
}
</style>