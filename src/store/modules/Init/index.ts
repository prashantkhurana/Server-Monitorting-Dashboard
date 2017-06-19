

import {Module} from "vuex";
import {InitState} from "./State";
import {actions} from "./actions";

export class Init implements Module<InitState, any> {
  namespaced = true;
  actions = actions;
}
