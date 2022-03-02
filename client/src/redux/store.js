import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import registerReducer from "./registerRedux";
import orderReducer from "./orderRedux";
import profileReducer from "./profilesRedux";
import cartReducer from "./cartRedux"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistStore, persistReducer } from "redux-persist";
import productsReducer from "./productsRedux";

const persistConfig = {
  key: "users",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  profile: profileReducer,
  product: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export let persistor = persistStore(store);
