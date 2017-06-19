<template>
  <div>
    <div class="row">
      <app-bidder-pod v-for="(bidderPod,index) in bidderPods" class="col s4 " :bidderPod="bidderPod"
                      v-if="bidderPod.status=='RED'"
                      key="index"></app-bidder-pod>
      <app-bidder-pod v-for="(bidderPod,index) in bidderPods" class="col s4 " :bidderPod="bidderPod"
                      v-if="bidderPod.status=='YELLOW'"
                      key="index"></app-bidder-pod>
      <app-bidder-pod v-for="(bidderPod,index) in bidderPods" class="col s4 " :bidderPod="bidderPod"
                      v-if="bidderPod.status=='GREEN'"
                      key="index"></app-bidder-pod>
    </div>


  </div>
</template>


<script lang="ts">
  import BidderPod from './BidderPod.vue'
  import Component from "vue-class-component";
  import Vue from "vue";
  import {Pods} from "../../store/modules/bidders/state";

  @Component({
    components: {
      appBidderPod : BidderPod,
    }
  })

  export default class BidderPods extends Vue {
    get bidderPods() : Pods {
      return this['$store'].state.bidders.podList;
    }
  }
</script>
