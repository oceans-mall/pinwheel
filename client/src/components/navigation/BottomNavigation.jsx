import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { Home } from "../../screen/Home";
import { Details } from "../../screen/Details";
import { ShoppingCart } from "../../screen/ShoppingCart";
import { Account } from "../../screen/Account";
import { View } from "react-native-animatable";
import { Payment } from "../../screen/Payment";
import { StyleSheet } from "react-native";

const tabItems = [
  {
    id: "1",
    name: "Home",
    component: Home,
    icon: "home-outline",
  },
  {
    id: "2",
    name: "Details",
    component: Details,
    icon: "information-outline",
  },
  {
    id: "3",
    name: "Cart",
    component: ShoppingCart,
    icon: "cart-outline",
  },
  {
    id: "4",
    name: "Payment",
    component: Payment,
    icon: "wallet-outline",
  },
  {
    id: "5",
    name: "Account",
    component: Account,
    icon: "person-outline",
  },
];

export const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          tabItems.map((item, i) => {
            route.name === item.name
              ? ((size = focused ? 25 : 20),
                (color = focused ? COLORS.primary : color),
                (iconName = item.icon))
              : null;
          });
          return (
            <View style={focused && iconName ? style.selectedTab : null}>
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarShowLabel: false,
        headerTitleAlign:'center',
        headerTintColor:COLORS.primary
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Cart" component={ShoppingCart} />
      <Tab.Screen name="Payment" component={Payment} />
      {/* <Tab.Screen name="Account" component={Account} /> */}
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  selectedTab: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    top: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
