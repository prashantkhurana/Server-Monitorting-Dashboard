const state = {
    headerNames : [],
    subHeaderNames : []
}


const mutations = {
    'SET_NAME'(state, names) {
        state.subHeaderNames = names;
    }
};

const actions = {
    setSubHeaderNames : ({commit}, names) => {
        commit('SET_NAME', names)
    }
}

export default {
    state,
    actions,
    mutations
};