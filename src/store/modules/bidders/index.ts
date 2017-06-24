
import {Module} from "vuex";
import {BidderState} from "./state";
import {actions} from "./actions";
import mutations from "./mutations";
import {RootState} from "../../index";

export class Bidder implements Module<BidderState, RootState> {
  state : BidderState;
  actions = actions;
  mutations = mutations;
  namespaced = true;

  public constructor() {
    this.state = new BidderState();
  }
}
