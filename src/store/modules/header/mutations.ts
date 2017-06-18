import {State}  from './state';
import {Mutation, MutationTree}from 'vuex';


function SET_NAME(state: State, names: {name: string, action : string}[]) {
  console.log("mutations");
  console.log(names);
  state.subHeaderNames = names;
}

export const mutations: MutationTree<State> = {

  'SET_NAME': SET_NAME
};
