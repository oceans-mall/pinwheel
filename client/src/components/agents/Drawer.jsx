import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard } from "./Dashboard";
import { DrawerContent } from './DrawerContent'
import { Sell } from './Sell'
import { Tables } from './Table'
import { Profile } from './Profile'
import { Support } from "./Support";
import { Settings } from "./Settings";
import COLORS from "../../consts/colors";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const Agent = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor:COLORS.primary,
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333',
        headerShown:false,
        drawerLabelStyle: {marginLeft: -25, fontSize:16, fontWeight:"600"}
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            )
          }}
      />
      <Drawer.Screen name="Sell" component={Sell}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="business-outline" size={22} color={color} />
          )
        }}
       />
       {/* <Drawer.Screen name="Fisher Folks" component={Tables}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          )
        }}
       /> */}
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name='person-outline' size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          )
        }}
      />
      <Drawer.Screen name="Support" component={Support}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="phone-portrait-outline" size={22} color={color} />
          )
        }}
       />
    </Drawer.Navigator>
  );
};
