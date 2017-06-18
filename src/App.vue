<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Header from './components/Header.vue'
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({
    components: {
      "appHeader": Header
    }
  })

  export  default class App extends Vue{
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
