<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        props: ['podName'],
        methods: {
            ...mapActions({
                setSubHeaderNames: 'setSubHeaderNames'
            })
        },
        mounted() {
            this.setSubHeaderNames([
                {
                    'status': 'Current status'
                },
                {
                    'all': 'All Bidders'
                }
            ]);

        }
    }

</script>