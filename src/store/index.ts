import Vue from 'vue'
import Vuex, {ModuleTree} from 'vuex'


// import bidderPod from './modules/bidderPod';
import bidders from './modules/bidders';
import {Header} from './modules/header'
import {State} from "./modules/header/state";



Vue.use(Vuex);

var header : ModuleTree<State> = {
  'header' : new Header()
}

export default new Vuex.Store({
  modules : {
    bidders,
    header : new Header()
  }
})
