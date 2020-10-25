import { createStore, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
//export default createStore(MainReducer);
/*`window.__REDUX_DEVTOOLS_EXTENSION__`*/

export default compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)(createStore)(MainReducer);
//const store = createStore(MainReducer, window.STATE_FROM_SERVER);