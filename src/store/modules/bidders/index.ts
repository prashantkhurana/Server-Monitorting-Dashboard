
import {Module} from "vuex";
import {BidderState} from "./state";
import {actions} from "./actions";
import mutations from "./mutations";

export class Bidder implements Module<BidderState, any> {
  state : BidderState;
  actions = actions;
  mutations = mutations;
  namespaced = true;

  public constructor() {
    this.state = new BidderState();
  }
}
