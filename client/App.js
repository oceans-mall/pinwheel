import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import StackNavigation from "./StackNavigation";
import {store} from './src/redux/store'


export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}