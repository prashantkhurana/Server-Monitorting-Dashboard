import Vue from 'vue';
import Vuex from 'vuex';
// import bidderPod from './modules/bidderPod';
import bidders from './modules/bidders';
import { Header } from './modules/header';
Vue.use(Vuex);
var header = {
    'header': new Header()
};
export default new Vuex.Store({
    modules: {
        bidders: bidders,
        header: new Header()
    }
});
