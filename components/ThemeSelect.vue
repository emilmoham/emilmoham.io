<template>
  <div class="theme-select">
    <div class="button" @click="togglePreference()" >
      <component :is="`icon-light`" />
    </div>
  </div>
</template>

<script>
  import IconLight from '@/assets/icons/light.svg?inline'
  
  export default {
    components: {
      IconLight
    },
    data() {
      return {}
    },
    methods: {
      togglePreference() {
        if(this.$colorMode.unknown) {
          return;
        }
        this.$colorMode.preference = this.$colorMode.value === "light" ? "dark" : "light";
      }
    }
  }
</script>

<style scoped>

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
    margin: 0;
    
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
</style>
