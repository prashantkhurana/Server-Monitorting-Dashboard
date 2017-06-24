import {State, SubHeaderName}  from './state';
import {MutationTree}from 'vuex';


function SET_NAME(state: State, names: SubHeaderName[]) {
  state.subHeaderNames = names;
}

export const mutations: MutationTree<State> = {
  'SET_NAME': SET_NAME
};
