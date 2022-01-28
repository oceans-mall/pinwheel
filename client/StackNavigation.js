import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import COLORS from "./src/consts/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { ResetPassword } from "./src/components/authentication/ResetPassword";
import { Service } from "./src/screen/Service";
import { Cart } from "./src/screen/Cart";
import { Agent } from "./src/components/agents/Drawer";
import { SplashScreen } from "./src/screen/SplashScreen";
import { Signup } from "./src/components/authentication/Signup";
import { SignIn } from "./src/components/authentication/SignIn";
import { Store } from "./src/screen/Store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Edit } from "./src/screen/Edit";
import { Details } from "./src/screen/Details";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function StackNavigation() {
  const [token, setToken] = useState();
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      return value !== null ? setToken(JSON.parse(value)) : null;
    } catch (e) {
      // read error
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  // const user = useSelector((state) => state.user.currentUser.isAgent);
  // console.log(user);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationTypeForReplace: "pop" }}
      >
        {token ? (
          <Stack.Group>
            <Stack.Screen name="Agent" component={Agent} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Welcome" component={SplashScreen} />
            <Stack.Screen name="Services" component={Service} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Register" component={Signup} />
            <Stack.Screen name="Reset" component={ResetPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
