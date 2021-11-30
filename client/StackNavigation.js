import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import COLORS from "./src/consts/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoard } from "./src/screen/onBoard";
import { Login } from "./src/components/authentication/Login";
import { Register } from "./src/components/authentication/Register"
import { ResetPassword } from "./src/components/authentication/ResetPassword";
import { Service } from "./src/screen/Service";
import { Cart } from "./src/screen/Cart";
import { Agent } from "./src/components/agents/Drawer";

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Reset" component={ResetPassword} />
        <Stack.Screen name="Services" component={Service} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name="Agent" component={Agent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}