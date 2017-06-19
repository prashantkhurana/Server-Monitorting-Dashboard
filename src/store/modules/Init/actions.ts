

import {ActionContext, ActionTree} from "vuex";
import {InitState} from "./State";
export function init(store : ActionContext<InitState, any>) : void {
  let json  = {
    "bidders" :[
      {
        "name": "sd2",
        "applicationName": "bidders",
        "status": "RED_FLAG",
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
    ],
    "scorers" : [
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

  };

  for (var app in json) {
    console.log(app);
    store.dispatch('bidders/init', json[app], {root : true});
  }
}


export let actions : ActionTree<InitState, any> = {
  init
}
