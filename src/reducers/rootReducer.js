import { combineReducers } from "redux";
import userReducer from "./userReducer";
import sitsitReducer from "./sitsitReducer";
export default combineReducers({
    userReducer,
    sitsitReducer,
});
