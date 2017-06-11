<template>
  <div>
    <app-table
    :columns = '[{"label":"Bidder","field":"hostName","numeric":false},{"label":"Status","field":"overallStatus","numeric":"false"},{"label":"Current Status","field":"summary","json":"true"}]'
    title = "Bidders" 
    :rows=bidders>
    </app-table>
  </div>
</template>

<script>
  import Table from './Table'
  export default {
    props: ['podName'],
    components: {
      appTable: Table,
    },
    computed: {
      bidders() {
        return this.$store.state.bidders.bidderPods[this.podName].machines.map(name => this.$store.state.bidders.machines[name]);
      }
    }
   }

</script>
