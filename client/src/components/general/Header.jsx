import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import COLORS from "../../consts/colors";

export const Header = () => {
  return (
    <View style={style.header}>
        <TouchableOpacity>
            <Ionicons name="menu" size={25} />
        </TouchableOpacity>
        <Text style={style.title}>Dashboard</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 60,
    paddingTop:15,
    backgroundColor: COLORS.primary,
  },
  title:{
      textAlign:'center',
      color:COLORS.white,
      fontSize:20,
      fontWeight:'bold'
  }
});
