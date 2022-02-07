import React, { useState } from "react";
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
    icon: "menu",
  },
  {
    id: "3",
    name: "ShoppingCart",
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
  const [selectIndex, setselectedIndex] = useState(0);
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      {tabItems.map((tab, i) => (
        <Tab.Screen
          key={i}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ color }) => (
              <View  style={selectIndex == i ? style.selectedTab : null}>
                <Ionicons
                  name={tab.icon}
                  size={28}
                  color={selectIndex == i ? COLORS.primary : color}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  selectedTab: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    top: -25,
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
