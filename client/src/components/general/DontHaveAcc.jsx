import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import COLORS from "../../consts/colors";

export const DontHaveAcc = ({ onPress = () => {} }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ marginRight: 10 }}>Don't have an account?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{ color: COLORS.primary, textDecorationLine: "underline" }}
        >
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};
