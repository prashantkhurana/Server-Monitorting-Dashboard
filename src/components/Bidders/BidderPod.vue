<template>
  <div>
    <div class="row">
      <div class="col s12 ">
        <div class="hoverable card darken-1" :class="colorFromStatus">
          <div class="card-content white-text">
            <span class="card-title">Pod {{name}}</span>
            <p>{{redCount}} RED, {{yellowCount}} YELLOW</p>
          </div>
          <div class="card-action">
            <router-link :to="name" append><a>Details</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

  import Component from "vue-class-component";
  import {PodDetails, Pods, STATUS_FLAG} from "../../store/modules/bidders/state";
  import Vue from "vue";

  @Component({
    props: {
      bidderPod: Object
    }
  })

  export default class BidderPod extends Vue {

    bidderPod: PodDetails;

    get colorFromStatus(): string {
      console.log(this.bidderPod.status.toString().split("_")[0]);
      return this.bidderPod.status.toString().split("_")[0].toLowerCase();
    }

    get status() {
      return this.bidderPod.status;
    }

    get name(): string {
      return this.bidderPod.name;
    }

    get redCount() {
      return this.bidderPod.machines
        .map(machine => this["$store"].state.bidders.machines[machine].overallStatus)
        .filter(status => status === STATUS_FLAG.RED_FLAG).length;
    }

    get yellowCount() {
      return this.bidderPod.machines
        .map(machine => this["$store"].state.bidders.machines[machine].overallStatus)
        .filter(status => status === STATUS_FLAG.YELLOW_FLAG).length;
    }
  }
</script>
