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
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function StackNavigation() {
  const [agent, setAgent] = useState("");
  
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      return value !== null ? setAgent(JSON.parse(value)) : null;
    } catch (e) {
      // read error
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  },[])
  console.log(agent);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationTypeForReplace: "pop" }}
      >
        {agent ? (
          <Stack.Group>
            <Stack.Screen name="Agent" component={Agent} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Welcome" component={SplashScreen} />
            <Stack.Screen name="Services" component={Service} />
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Register" component={Signup} />
            <Stack.Screen name="Reset" component={ResetPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
