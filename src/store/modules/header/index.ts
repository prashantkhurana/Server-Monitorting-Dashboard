import {Module} from "vuex";
import {State} from "./state";
import actions from "./actions";
import {mutations} from './mutations';

export class Header implements Module<State, any> {
  state: State;
  actions = actions;
  mutations = mutations;

  public constructor() {
    this.state = new State();
  }
}
