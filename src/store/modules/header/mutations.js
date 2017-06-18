function SET_NAME(state, names) {
    console.log("mutations");
    console.log(names);
    state.subHeaderNames = names;
}
export var mutations = {
    'SET_NAME': SET_NAME
};
