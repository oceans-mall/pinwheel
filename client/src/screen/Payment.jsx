import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";

export const Payment = () => {
  const number = useSelector((state) => state.user.currentUser?.contact);
  const total = useSelector((state) => state.order.total);
  const orders = useSelector((state) => state.ordersummary.orders);

  const details = orders.products.map((item) => (
    <View style={style.summary} key={item.id}>
      <Text numberOfLines={1} style={style.text}>
        {item.name}
      </Text>
      <Text style={style.text}>{item.weight}</Text>
      <Text style={style.text}>{item.cost}</Text>
      <Text style={style.pending}>{orders.status}</Text>
    </View>
  ));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.paymentTotal}>
          <Text style={style.text}>Amount Receivable</Text>
          <Text style={[style.text, style.amount]}>&#x20B5; {total}</Text>
          <Text style={{ fontSize: 20 }}>MOMO #: {number}</Text>
        </View>
        <View style={{ flex: 1, margin: 10 }}>
          <Text
            style={{
              padding: 5,
              fontWeight: "bold",
              fontSize: 18,
              color: COLORS.primary,
            }}
          >
            ORDER SUMMARY
          </Text>
          <ScrollView style={{ flex: 1 }}>
            <View style={style.summary}>
              <Text style={style.text}>Item</Text>
              <Text style={style.text}>Weight(kg)</Text>
              <Text style={style.text}>Cost</Text>
              <Text style={style.text}>Status</Text>
            </View>
            {details}
          </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "left",
  },
  pending: {
    color: "#f56cb0",
    fontSize: 15,
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 2,
  },
});
