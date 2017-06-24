import {ActionContext, ActionTree} from "vuex";
import {BidderState} from "./state";
import {normalize, schema} from "normalizr";
import {RootState} from "../../index";


export function init(context: ActionContext<BidderState, RootState>, bidderStatusAsJson : string): void {
  console.log("json in bidder inti is + ", bidderStatusAsJson);
  const normalizedData = normalize(bidderStatusAsJson, biddersSchema);

  const out = JSON.stringify(normalizedData, null, 2);
  console.log(out);
  context.commit('SET_PODS', normalizedData.entities.pods);
  context.commit('SET_MACHINES', normalizedData.entities.machines);
}

export let actions: ActionTree<BidderState, RootState> = {
  init
}


const machineSchema = new schema.Entity('machines', {}, {idAttribute: 'hostName'});

const podSchema = new schema.Entity('pods', {
  machines: [machineSchema]
}, {idAttribute: 'name'});

const biddersSchema = new schema.Array(podSchema);
