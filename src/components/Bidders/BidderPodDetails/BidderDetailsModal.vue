<template>
  <div>
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>{{selectedBidder}}</h4>
        <p>Overall Status : {{bidderInfo.overallStatus}}</p>
        <div class="card">
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <a :class="{active : bidderInfo.overallStatus === 'RED_FLAG'}" href="#test4">Red Items</a></li>
              <li class="tab"><a :class="{active : bidderInfo.overallStatus === 'YELLOW_FLAG'}" href="#test5">Yellow Items</a></li>
            </ul>
          </div>
          <div class="card-content grey lighten-4">
            <div id="test4">
              <div v-for="(item,index) in bidderInfo.summary['RED_FLAG']">
                <p>Name : {{item["name"]}}</p>
                <p>Summary : {{item["summary"]}}</p>
                <p>Url : {{item["url"]}} </p>
              </div>
            </div>
            <div id="test5">
              <div v-for="(item,index) in bidderInfo.summary['YELLOW_FLAG']">
                <p>Name : {{item["name"]}}</p>
                <p>Summary : {{item["summary"]}}</p>
                <p>Url : {{item["url"]}} </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['selectedBidder', 'open'],
    data() {
      return {
        showModal: false,
        isOpened: false
      }
    },
    computed: {
      bidderMessage() {


      },
      bidderInfo() {
        if (this.selectedBidder != '') {
          return this.$store.state.bidders.machines[this.selectedBidder];
        }
        else {
          return {
            "hostName": "asd654.sd.pl.pvt",
            "overallStatus": "RED_FLAG",
            "summary": {
              "RED_FLAG": [
                {
                  "name": "crosswalk read fail rate",
                  "summary": "Crosswalk Read Fail Rate",
                  "url": "http://asd654:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk8806286908258231fx"
                }
              ]
            }
          }
        }
      }
    },
    watch: {
      open: function (newOpen) {
        console.log("open is " + newOpen);
        this.isOpened = true;
        this.openModal()
      }
    },
    methods: {
      openModal() {
        $('#modal1').modal('open')
        if (this.bidderInfo.overallStatus === 'RED_FLAG') {
          $('ul.tabs').tabs('select_tab', 'test4');
        } else {
          $('ul.tabs').tabs('select_tab', 'test5');
        }
      }
    },
    mounted() {
      console.log("initializing modal")
      $(document).ready(function () {
        $('ul.tabs').tabs();
        $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          complete: function () { this.open = false } // Callback for Modal close
        }


        );
      });
    }
  }

</script>