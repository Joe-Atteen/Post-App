import { legacy_createStore } from "redux";
import Reducer from "./Reducer";

let store = legacy_createStore(Reducer);

export default store;
