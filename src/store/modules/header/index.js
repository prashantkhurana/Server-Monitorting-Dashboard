import { State } from "./state";
import actions from "./actions";
import { mutations } from './mutations';
var Header = (function () {
    function Header() {
        this.actions = actions;
        this.mutations = mutations;
        this.state = new State();
    }
    return Header;
}());
export { Header };
