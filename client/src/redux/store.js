import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import registerReducer from "./registerRedux";
import profileReducer from "./profileRedux";

const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: {
        user : userReducer,
        register: registerReducer,
        profile: profileReducer
    }
})