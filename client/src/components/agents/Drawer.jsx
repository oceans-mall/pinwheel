import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard } from "./Dashboard";
import { DrawerContent } from "./DrawerContent";
import { Sell } from "./Sell";
import { Profile } from "./Profile";
import COLORS from "../../consts/colors";
import { Ionicons } from "@expo/vector-icons";
import { OrderHistory } from "./OrderHistory";
import { Notifications } from "./Notifications";
import { Orders } from "./Orders";
import { Settings } from "./Settings";
import { Cart } from "./Cart";

const Drawer = createDrawerNavigator();

export const Agent = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        headerShown: false,
        drawerLabelStyle: { marginLeft: -25, fontSize: 16, fontWeight: "600" },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sell"
        component={Sell}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="business-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
        }}
      />
       <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="basket-outline" size={22} color={color} />
          ),
          drawerLabel: "Cart",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="stats-chart-outline" size={22} color={color} />
          ),
          drawerLabel: "Order Status",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="History"
        component={OrderHistory}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="archive" size={22} color={color} />
          ),
          drawerLabel: "Order History",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="alert" size={22} color={color} />
          ),
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
          drawerLabel: "Account Details",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
        }}
      />
    </Drawer.Navigator>
  );
};
