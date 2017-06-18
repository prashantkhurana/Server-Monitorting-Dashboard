<template>
    <div>
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo right">Checklist</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down" list-style="{padding : 500px}">
                    <li class="tab" v-for="headerName in headerNames">
                        <router-link :to="Object.keys(headerName)[0]" active-class="active">{{headerName[Object.keys(headerName)[0]]}}</router-link>
                    </li>
                    <router-link to="/bidders" active-class="active" tag="li"><a>Bidders</a></router-link>
                    <router-link to="/scoring" active-class="active" tag="li"><a>Scoring</a></router-link>
                    <router-link to="/misc" active-class="active" tag="li"><a>Misc</a></router-link>
                </ul>
            </div>
            <div class="nav-content">
                <ul class="tabs">
                    <li class="tab" v-for="subHeaderName in subHeaderNames">
                        <router-link :to="Object.keys(subHeaderName)[0]" active-class="active">{{subHeaderName[Object.keys(subHeaderName)[0]]}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>



<script>
    export default {
        computed: {
            subHeaderNames() {
                console.log("in header vue file");
                console.log(this.$store.state.header.subHeaderNames);
                return this.$store.state.header.subHeaderNames;
            },
            headerNames() {
              console.log("in header vue file");
              console.log(this.$store.state.header.headerNames);
                return this.$store.state.header.headerNames;
            }
        },
        updated () {
            $('ul.tabs').tabs();
        }
    }
</script>
