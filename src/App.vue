<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    },
    beforeCreate () {
      this.$store.dispatch('init');
    }
  }

</script>

<style>
  .tabs .indicator {
    display: none;
  }

  .tabs .tab a.active {
    border-bottom: 2px solid #f6b2b5;
  }

</style>