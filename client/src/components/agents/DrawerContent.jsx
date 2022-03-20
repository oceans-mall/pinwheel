import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import COLORS from "../../consts/colors";
import { Ionicons } from "@expo/vector-icons";
import backImage from "../../../assets/back.jpg"
import userAvatar from "../../../assets/useravatar.jpg"

export const DrawerContent = (props) => {
  // logout user
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      Alert.alert("logout complete");
      //navigation.navigate("Services")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: COLORS.primary }}
      >
        <ImageBackground
          source={backImage}
          style={{ padding: 10 }}
        >
          <Image
            source={userAvatar}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#fff", fontSize: 18 }}>Danny</Text>
        </ImageBackground>
        <View style={{ backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="exit-outline" size={22} />
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
