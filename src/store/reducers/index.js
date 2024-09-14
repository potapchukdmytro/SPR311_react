import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authReducer/AuthReducer";

const rootReducer = combineReducers({
    // name   :  reducer
    authReducer: AuthReducer
});

export default rootReducer;