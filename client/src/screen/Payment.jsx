import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";

export const Payment = () => {
  
  const number = useSelector((state) => state.user.currentUser?.contact )

  const total = useSelector((state) => state.order.total);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.paymentTotal}>
          <Text style={style.text}>Amount Receivable</Text>
          <Text style={[style.text, style.amount]}>&#x20B5; {total}</Text>
        </View>
        <View style={style.momo}>
          <Text
            style={{ color: COLORS.dark, fontWeight: "bold", fontSize: 18 }}
          >
           Payment Details
          </Text>
        </View>
        <View style={[style.momo, style.flex]}>
          <Text style={style.momotxt}>MOMO #: {number}</Text>
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
  momo: {
    backgroundColor: "#e3d23b",
    padding: 10,
    marginHorizontal: 20,
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
  flex: {
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  momotxt:{
    width: 200,
    fontSize: 18,
    height: 50,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 5,
    marginVertical:3
  }
});
