<template>
  <div>
    <h1> Bidder pod {{ podName }} is {{status}} </h1>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {STATUS_FLAG} from "../../../store/modules/bidders/state";

  @Component({
    props: {
      podName: String
    }
  })


  export default class  BidderPodCurrentStatus extends Vue {
      podName : string;

    get status() : STATUS_FLAG {
      return this['$store'].state.bidders.podList[this.podName].status;
    }
    }
</script>
