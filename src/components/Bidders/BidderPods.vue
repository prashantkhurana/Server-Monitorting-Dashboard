<template>
    <div>
        <div class="row">
            <app-bidder-pod v-for="(bidderPod,index) in bidderPods" class="col s4 " :bidderPod="bidderPod" v-if="bidderPod.status=='RED'"
                key="index"></app-bidder-pod>
            <app-bidder-pod v-for="(bidderPod,index) in bidderPods" class="col s4 " :bidderPod="bidderPod" v-if="bidderPod.status=='YELLOW'"
                key="index"></app-bidder-pod>
            <app-bidder-pod v-for="(bidderPod,index) in bidderPods" class="col s4 " :bidderPod="bidderPod" v-if="bidderPod.status=='GREEN'"
                key="index"></app-bidder-pod>
        </div>


    </div>
</template>


<script>
    import BidderPod from './BidderPod'
    export default {
        components: {
            appBidderPod: BidderPod,
        },
        computed: {
            bidderPods() {
                return this.$store.getters.getBidderPods;
            },
        },
    }

</script>