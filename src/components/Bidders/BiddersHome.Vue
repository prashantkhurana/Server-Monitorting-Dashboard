<template>
    <div>
      <router-view></router-view>
    </div>
</template>


<script>
  import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions({
        setSubHeaderNames: 'setSubHeaderNames'
      })
    },
    mounted() {
      this.setSubHeaderNames([
        {
          'pods': 'pods'
        },
        {
          'all': 'All Bidders'
        }
      ]);
    },
  }

</script>
