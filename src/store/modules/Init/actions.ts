

import {ActionContext, ActionTree} from "vuex";
import {InitState} from "./State";
import {RootState} from "../../index";
export function init(store : ActionContext<InitState, RootState>) : void {
  let json  = {
    "bidders" :[
      {
        "name": "sd2",
        "status": "RED_FLAG",
        "machines": [
          {
            "hostName": "bidder1",
            "overallStatus": "RED_FLAG",
            "summary": {
              "RED_FLAG": [
                {
                  "name": "read from memcache fail",
                  "summary": "Read from memcache failed",
                  "url": "http://bidder1/memcache"
                }
              ]
            }
          },
          {
            "hostName": "bidder2",
            "overallStatus": "YELLOW_FLAG",
            "summary": {
              "YELLOW_FLAG": [
                {
                  "name": "casandra fail",
                  "summary": "casandra fail",
                  "url": "http://bidder2/cassandra"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "eq1",
        "status": "GREEN_FLAG",
        "machines": [
          {
            "hostName": "bidder3",
            "overallStatus": "GREEN_FLAG",
            "summary": {}
          }
        ]
      }
    ],
    "mappers" : [
      {
        "name": "sd2",
        "status": "RED",
        "machines": [
          {
            "hostName": "mapper1",
            "overallStatus": "RED_FLAG",
            "summary": {
              "RED_FLAG": [
                {
                  "name": "sql fail",
                  "summary": "sql fail",
                  "url": "http://mapper1/sql"
                }
              ]
            }
          },
          {
            "hostName": "mapper2",
            "overallStatus": "YELLOW_FLAG",
            "summary": {
              "YELLOW_FLAG": [
                {
                  "name": "cassandra fail",
                  "summary": "cassandra fail",
                  "url": "http://mapper2/cassandra"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "eq1",
        "status": "GREEN",
        "machines": [
          {
            "hostName": "mapper3",
            "overallStatus": "GREEN_FLAG",
            "summary": {}
          }
        ]
      }
    ]

  };

  store.dispatch('bidders/init', json['bidders'], {root : true});

  // for (var app in json) {
  //   console.log(app);
  //   store.dispatch('bidders/init', json[app], {root : true});
  // }
}


export let actions : ActionTree<InitState, RootState> = {
  init
}
