export function setSubHeaderNames(store, names) {
    console.log("called setsubheader action" + names.length);
    console.log(names);
    store.commit('SET_NAME', names);
}
export default {
    setSubHeaderNames: setSubHeaderNames
};
