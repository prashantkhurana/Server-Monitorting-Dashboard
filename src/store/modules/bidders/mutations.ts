import {BidderState, Machines, Pods} from './state';
import {Mutation, MutationTree}from 'vuex';

export function SET_PODS(state : BidderState, pods : Pods) : void {
  console.log("in set pods ");
  console.log(pods);

  state.podList = pods;
}

export function SET_MACHINES(state : BidderState, machines : Machines)   {
  state.machines = machines;
}

export default <MutationTree<BidderState>> {
  SET_PODS, SET_MACHINES
}

