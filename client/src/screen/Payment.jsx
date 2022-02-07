import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";

export const Payment = () => {
  const total = useSelector((state) => state.cart.total)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.paymentTotal}>
          <Text style={style.text}>Amount Payable</Text>
          <Text style={[style.text, style.amount]}>&#x20B5; {total}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentTotal: {
    backgroundColor: COLORS.white,
    padding: 20,
    margin: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 20,
    color:COLORS.primary,
    fontWeight:'bold'
  },
  amount: {
    fontSize: 18,
    fontWeight:'bold',
    color: COLORS.gray,
  },
});
