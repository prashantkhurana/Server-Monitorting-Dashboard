import Vue from 'vue'
import Vuex, {ModuleTree} from 'vuex'
import {Header} from './modules/header'
import {State} from "./modules/header/state";
import {Init} from "./modules/Init/index";
import {Bidder} from "./modules/bidders/index";


Vue.use(Vuex);

var header: ModuleTree<State> = {
  'header': new Header()
}

export default new Vuex.Store({
  modules: {
    bidders: new Bidder(),
    header: new Header(),
    init: new Init()
  }
})

export class RootState {

}
