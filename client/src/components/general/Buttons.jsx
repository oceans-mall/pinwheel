import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../../consts/colors";

export const FlatButton = ({ text, onPress = () =>{}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.btn}>
        <Text style={style.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  btn: {
    height:60,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary, // "#f01d71"
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
