<template>
  <div class="theme-select">
    <div class="button" @click="togglePreference()" >
      <LightIcon />
    </div>
  </div>
</template>

<script>
  import LightIcon from '@/assets/icons/light.svg?component';

  export default {
    data() {
      return {}
    },
    components: {
      LightIcon
    },
    methods: {
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
