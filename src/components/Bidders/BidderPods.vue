<template>
  <div>
    <div class="row">
      <app-bidder-pod v-for="(bidderPod,index) in getBidderPodsWith('RED_FLAG')" class="col s4 " :bidderPod="bidderPod"
                      key="index"></app-bidder-pod>
      <app-bidder-pod v-for="(bidderPod,index) in getBidderPodsWith('YELLOW_FLAG')" class="col s4 " :bidderPod="bidderPod"
                      key="index"></app-bidder-pod>
      <app-bidder-pod v-for="(bidderPod,index) in getBidderPodsWith('GREEN_FLAG')" class="col s4 " :bidderPod="bidderPod"
                      key="index"></app-bidder-pod>
    </div>
  </div>
</template>


<script lang="ts">
  import BidderPod from './BidderPod.vue'
  import Component from "vue-class-component";
  import Vue from "vue";
  import {PodDetails, Pods, STATUS_FLAG} from "../../store/modules/bidders/state";

  @Component({
    components: {
      appBidderPod : BidderPod,
    }
  })

  export default class BidderPods extends Vue {
    get bidderPods() : Pods {
      console.log("in bidder pods");
      return this['$store'].state.bidders.podList;
    }

    getBidderPodsWith(status : STATUS_FLAG) : PodDetails[] {
      var pods : Pods = this.bidderPods;
      console.log("get");
      let podsWithStatus : Array<PodDetails> = [];
      for( let pod in pods) {
        var podDetails : PodDetails = pods[pod];
        if (podDetails.status == status) {
          podsWithStatus.push(podDetails);
        }
      }
      return podsWithStatus;
    }
  }
</script>
