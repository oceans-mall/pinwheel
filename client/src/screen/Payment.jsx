import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";

export const Payment = () => {
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
            style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}
          >
            Please add your momo number
          </Text>
        </View>
        <View style={[style.momo, style.flex]}>
          <TextInput
            placeholder="Enter your momo number"
            style={{
              width: 200,
              fontSize: 18,
              height: 50,
              backgroundColor: "white",
              padding: 7,
              borderRadius: 5,
            }}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
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
    flexDirection: "row",
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
});
