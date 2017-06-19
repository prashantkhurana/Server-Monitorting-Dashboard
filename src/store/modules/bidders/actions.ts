import {ActionContext, ActionTree} from "vuex";
import {BidderState} from "./state";
import {normalize, schema} from "normalizr";


export function init(store: ActionContext<BidderState, any>, bidderStatusAsJson : string): void {
  console.log("json in bidder inti is + ", bidderStatusAsJson);
  const normalizedData = normalize(bidderStatusAsJson, biddersSchema);

  const out = JSON.stringify(normalizedData, null, 2);
  console.log(out);
  store.commit('SET_PODS', normalizedData.entities.pods);
  store.commit('SET_MACHINES', normalizedData.entities.machines);
}

export let actions: ActionTree<BidderState, any> = {
  init
}


const machineSchema = new schema.Entity('machines', {}, {idAttribute: 'hostName'});

const podSchema = new schema.Entity('pods', {
  machines: [machineSchema]
}, {idAttribute: 'name'});

const biddersSchema = new schema.Array(podSchema);
