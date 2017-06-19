import {instance}  from '../../axios'
import { normalize, schema } from 'normalizr';


const state =  {
    bidderPodsList : [],
    bidderPods : {
        "ad-s1" : { "id": "1", "name": "ad-s1", "status": "RED", "machines": ["asd615", "asd616"]},
        "ad-s2" : { "id": "2", "name": "ad-s2", "status": "GREEN", "machines": ["asd617", "asd618"] },
    },
    machines : {
        "asd615" : { "hostName": "asd615", "overallStatus": "RED", "reason": "Geo Data" },
        "asd617" : { "hostName": "asd615", "overallStatus": "RED", "reason": "Geo Data" },
        "asd618" : { "hostName": "asd615", "overallStatus": "RED", "reason": "Geo Data" },
        "asd619" : { "hostName": "asd615", "overallStatus": "RED", "reason": "Geo Data" },
    }
}

const mutations = {
    'SET_PODS': (state, pods) => {
        state.bidderPods = pods;
    },
    'SET_MACHINES' : (state, machines) => {
        state.machines = machines;
    }
}

const actions = {
    init: ({commit}) => {
        console.log("called init");
        console.log(this.instance);
//         instance.get('getStatus')
//             .then(response => console.log(response))
//             .catch(function (error) {
//     //console.log(error);
//   });
            //.catch("dd")

      // let json = [
      //   {
      //     "name": "bidders",
      //     "details": [
      //       {
      //         "name": "sd2",
      //         "applicationName": "bidders",
      //         "status": "RED",
      //         "machines": [
      //           {
      //             "hostName": "asd654.sd.pl.pvt",
      //             "overallStatus": "RED_FLAG",
      //             "summary": {
      //               "RED_FLAG": [
      //                 {
      //                   "name": "crosswalk read fail rate",
      //                   "summary": "Crosswalk Read Fail Rate",
      //                   "url": "http://asd654:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk8806286908258231fx"
      //                 }
      //               ]
      //             }
      //           },
      //           {
      //             "hostName": "asd650.sd.pl.pvt",
      //             "overallStatus": "YELLOW_FLAG",
      //             "summary": {
      //               "YELLOW_FLAG": [
      //                 {
      //                   "name": "crosswalk read fail rate",
      //                   "summary": "Crosswalk Read Fail Rate",
      //                   "url": "http://asd650:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk-15679785739988871fx"
      //                 }
      //               ]
      //             }
      //           }
      //         ]
      //       },
      //       {
      //         "name": "eq1",
      //         "status": "GREEN",
      //         "applicationName": "bidders",
      //         "machines": [
      //           {
      //             "hostName": "aeq1030.eq.pl.pvt",
      //             "overallStatus": "GREEN_FLAG",
      //             "summary": {}
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     "name": "scorers",
      //     "details": [
      //       {
      //         "name": "sd2",
      //         "status": "RED",
      //         "applicationName": "scorers",
      //         "machines": [
      //           {
      //             "hostName": "asd654.sd.pl.pvt",
      //             "overallStatus": "RED_FLAG",
      //             "summary": {
      //               "RED_FLAG": [
      //                 {
      //                   "name": "crosswalk read fail rate",
      //                   "summary": "Crosswalk Read Fail Rate",
      //                   "url": "http://asd654:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk8806286908258231fx"
      //                 }
      //               ]
      //             }
      //           },
      //           {
      //             "hostName": "asd650.sd.pl.pvt",
      //             "overallStatus": "YELLOW_FLAG",
      //             "summary": {
      //               "YELLOW_FLAG": [
      //                 {
      //                   "name": "crosswalk read fail rate",
      //                   "summary": "Crosswalk Read Fail Rate",
      //                   "url": "http://asd650:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk-15679785739988871fx"
      //                 }
      //               ]
      //             }
      //           }
      //         ]
      //       },
      //       {
      //         "name": "eq1",
      //         "status": "GREEN",
      //         "applicationName": "scorers",
      //         "machines": [
      //           {
      //             "hostName": "aeq1030.eq.pl.pvt",
      //             "overallStatus": "GREEN_FLAG",
      //             "summary": {}
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ];
      let json = {
        "bidders" :{
          "details": [
            {
              "name": "sd2",
              "applicationName": "bidders",
              "status": "RED",
              "machines": [
                {
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
                },
                {
                  "hostName": "asd650.sd.pl.pvt",
                  "overallStatus": "YELLOW_FLAG",
                  "summary": {
                    "YELLOW_FLAG": [
                      {
                        "name": "crosswalk read fail rate",
                        "summary": "Crosswalk Read Fail Rate",
                        "url": "http://asd650:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk-15679785739988871fx"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "eq1",
              "status": "GREEN",
              "applicationName": "bidders",
              "machines": [
                {
                  "hostName": "aeq1030.eq.pl.pvt",
                  "overallStatus": "GREEN_FLAG",
                  "summary": {}
                }
              ]
            }
          ]
        },
        "scorers" : {
          "details": [
            {
              "name": "sd2",
              "status": "RED",
              "applicationName": "scorers",
              "machines": [
                {
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
                },
                {
                  "hostName": "asd650.sd.pl.pvt",
                  "overallStatus": "YELLOW_FLAG",
                  "summary": {
                    "YELLOW_FLAG": [
                      {
                        "name": "crosswalk read fail rate",
                        "summary": "Crosswalk Read Fail Rate",
                        "url": "http://asd650:8080/adserv/dashboard?view=crosswalk read fail rate&type=json&token=7euk-15679785739988871fx"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "eq1",
              "status": "GREEN",
              "applicationName": "scorers",
              "machines": [
                {
                  "hostName": "aeq1030.eq.pl.pvt",
                  "overallStatus": "GREEN_FLAG",
                  "summary": {}
                }
              ]
            }
          ]
        }
      }
      //console.log("normalizedData");



const machineSchema = new schema.Entity('machines', {}, {
    idAttribute: (value, parent, key) => {
      //console.log(parent);
      return value.hostName + '-' + parent.applicationName;
    }
  });

  //const machineList = new schema.Array(machineSchema);

  const podSchema = new schema.Entity('pods', {
    machines: [machineSchema]
  }, { idAttribute: (value, parent, key) => value.name + '-' + value.applicationName });

  const productSchema = new schema.Entity('products', {
    details: [podSchema]
  }, { idAttribute: 'name' });

  //const biddersSchema = new schema.Array(podSchema);
  const biddersSchema = new schema.Array(productSchema);





  const normalizedData = normalize(json, biddersSchema);
  //console.log(normalizedData);
  const out = JSON.stringify(normalizedData, null, 2);
  //console.log(out);




//console.log("pods");
//console.log(normalizedData.entities.pods);
commit('SET_PODS', normalizedData.entities.pods);
commit('SET_MACHINES', normalizedData.entities.machines);
//console.log("all machines");
//console.log(normalizedData.entities.machines);







const json2 = {"sd2":{"podStatus":"GREY_FLAG","bidderStatus":{"asd654.sd.pl.pvt":{"hostName":"asd654.sd.pl.pvt","overallStatus":"GREEN_FLAG","summary":{}},"asd650.sd.pl.pvt":{"hostName":"asd650.sd.pl.pvt","overallStatus":"GREEN_FLAG","summary":{}},"asd658.sd.pl.pvt":{"hostName":"asd658.sd.pl.pvt","overallStatus":"GREEN_FLAG","summary":{}}}},"eq1":{"podStatus":"GREY_FLAG","bidderStatus":{"aeq1030.eq.pl.pvt":{"hostName":"aeq1030.eq.pl.pvt","overallStatus":"GREEN_FLAG","summary":{}}}}};

// console.log(normalize(json2));


console.log("Fd")
// console.log(normalize(json));

        let pods = [
            { "id": "1", "name": "ad-s1", "status": "RED", "machines": [{ "name": "asd615", "status": "RED", "reason": "Geo Data" }, { "name": "asd616", "status": "RED", "reason": "Geo Data" }, { "name": "asd617", "status": "RED", "reason": "Geo Data" }, { "name": "asd618", "status": "RED", "reason": "Geo Data" }] },
            { "id": "2", "name": "ad-s2", "status": "GREEN", "machines": [{ "name": "asd615", "status": "RED", "reason": "Geo Data" }, { "name": "asd616", "status": "RED", "reason": "Geo Data" }, { "name": "asd617", "status": "RED", "reason": "Geo Data" }, { "name": "asd618", "status": "RED", "reason": "Geo Data" }] },
        ]
        //commit('SET_PODS', pods);
    }
}


// 'use strict';






const getters = {
    getStatus : state => {
        let status = 'GREEN';
        let numberOfRedBidders = 0;
        let numberOfYellowBidders = 0;
        state.bidderPodsList.forEach(bidder => {
            if (bidder.status == 'RED') {
                numberOfRedBidders++;
            } else if (bidder.status == 'YELLOW') {
                numberOfYellowBidders++
            }
        });

        if (numberOfRedBidders > 5) {
            return 'RED'
        } else if (numberOfRedBidders > 0 || numberOfYellowBidders > 0) {
            return 'YELLOW'
        } else {
            return 'RED';
        }
    },
    getBidderPods : state => {
        console.log("called bidder pods");
        console.log(state.bidderPods);
      return state.bidderPods;
    },
    // getStatusForMachine : (state) => {
    //     console.log("machineName");
    //     console.log(machineName);
    //     return state.machines[machineName].overallStatus;
    // }
}

export default {
    state,
    getters,
    actions,
    mutations,
    // mutations,
    // actions,
    // getters
}
