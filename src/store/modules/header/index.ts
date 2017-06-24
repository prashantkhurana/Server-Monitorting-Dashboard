import {Module} from "vuex";
import {State} from "./state";
import actions from "./actions";
import {mutations} from './mutations';
import {RootState} from "../../index";

export class Header implements Module<State, RootState> {
  state: State;
  actions = actions;
  mutations = mutations;

  public constructor() {
    this.state = new State();
  }
}
