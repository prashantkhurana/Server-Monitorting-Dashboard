const state =  {
    name : '',
    number : '',
    bidders : []
}

const mutations = {
    'SET_POD': (state, pod) => {
        state.name = pod.name;
        state.number = pod.number;
        state.bidders = pod.bidders;
    }
}

const actions = {
    initPod : ({commit}, pod) => {
        commit('SET_POD', pod);
    }
}

const getters = {
    getStatus : state => {
        let status = 'GREEN';
        let numberOfRedBidders = 0;
        let numberOfYellowBidders = 0;
        state.bidders.forEach(bidder => {
            if (bidder.status == 'RED') {
                numberOfRedBidders++;
            } else if (bidder.status == 'YELLOW') {
                numberOfYellowBidders++
            }
        });

        if (numberOfRedBidders > 5) {
            return 'RED'
        } else if (numberOfRedBidders > 0 || numberOfYellowBidders > 0) {
            return 'YELLOW'
        } else {
            return 'RED';
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}