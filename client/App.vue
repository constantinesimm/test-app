<template>
  <div id="app">
    <cards-grid />
  </div>
</template>

<script>
  import CardsGrid from './views/CardsGrid';

  export default {
    components: {
      CardsGrid
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>