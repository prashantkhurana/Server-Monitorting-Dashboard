

import {Module} from "vuex";
import {InitState} from "./State";
import {actions} from "./actions";
import {RootState} from "../../index";

export class Init implements Module<InitState, RootState> {
  namespaced = true;
  actions = actions;
}
