<template>
  <div>
    <h1> Bidder pod {{ podName }} is {{status}} </h1>
  </div>
</template>

<script>
    export default {
        props: ['podName'],
        computed: {
            status() {
                return this.$store.state.bidders.bidderPods[this.podName].status;
            }
        }
    }
</script>