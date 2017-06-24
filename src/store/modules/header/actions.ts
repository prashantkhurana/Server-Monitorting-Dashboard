import {ActionContext, ActionTree} from "vuex";
import {State, SubHeaderName} from "./state";
import {RootState} from "../../index";


export function setSubHeaderNames(context: ActionContext<State, RootState>, names: SubHeaderName[]) {
  console.log("called setsubheader action" + names.length);
  console.log(names);
  context.commit('SET_NAME', names);
}


export default <ActionTree<State, RootState>> {
  setSubHeaderNames
}


