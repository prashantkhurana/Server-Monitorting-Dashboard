<template>
    <div>
        <div class="row">
            <div class="col s12 ">
                <div class="hoverable card darken-1" :class="status">
                    <div class="card-content white-text">
                        <span class="card-title">{{bidderPod.name}} / pod {{ bidderPod.id}}</span>
                        <p>{{redCount}} RED, {{yellowCount}} YELLOW</p>
                    </div>
                    <div class="card-action">
                        <router-link :to="bidderPod.name" append><a>Details</a></router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        props: ['bidderPod'],
        computed: {
            status() {
                return this.bidderPod.status.toLowerCase();
            },
            redCount() {
                return this.bidderPod.machines
                    .map(machine => this.$store.state.bidders.machines[machine].overallStatus)
                    .filter(machine => machine == 'RED_FLAG').length;
            },
            yellowCount() {
                return this.bidderPod.machines
                    .map(machine => this.$store.state.bidders.machines[machine].overallStatus)
                    .filter(machine => machine == 'YELLOW_FLAG').length;
            }
        }
    }

</script>
