import {ActionContext, ActionTree} from "vuex";
import {State} from "./state";


export function setSubHeaderNames(store: ActionContext<State, any>, names: {name: string, action : string}[]) {
  console.log("called setsubheader action" + names.length);
  console.log(names);
  store.commit('SET_NAME', names);
}


export default <ActionTree<State, any>> {
  setSubHeaderNames
}


