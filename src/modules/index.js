
import { authRedux } from "./authRedux";
import { combineReducers } from "redux";
import { sotreRedux } from "./sotreRedux";
import { user } from "./user";
import { PostRedux } from "./post";
export const rootReducer = combineReducers({
    authRedux,sotreRedux,user,PostRedux
})