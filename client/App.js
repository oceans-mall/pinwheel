import React, { useState } from "react";
import { Provider } from "react-redux";
import StackNavigation from "./StackNavigation";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {
  return Font.loadAsync({
    BarlowCondensed: require("./assets/fonts/BarlowCondensed-Light.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("Error")}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
