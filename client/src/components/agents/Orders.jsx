import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../consts/colors";
import DataTable from "react-native-datatable-component";

export const Orders = () => {
  const number = useSelector((state) => state.user.currentUser?.phone);
  const user = useSelector((state) => state.user.currentUser._id);
  const orders = useSelector((state) => state.ordersummary?.orders);
  const order = orders.product;
console.log(order);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.paymentTotal}>
        <Text style={style.text}>Amount Receivable</Text>
        <Text style={[style.text, style.amount]}>&#x20B5; {orders.total}</Text>
        <Text style={{ fontSize: 20 }}>MOMO #: {number}</Text>
      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <Text
          style={{
            padding: 5,
            marginBottom: 5,
            fontWeight: "bold",
            fontSize: 15,
            color: COLORS.primary,
          }}
        >
          ORDER SUMMARY
        </Text>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <DataTable
            data={order}
            colNames={["name", "weight", "cost"]}
            backgroundColor={"rgba(23,2,4,0.01)"}
            noOfPages={10}
          />
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
    color: COLORS.primary,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "left",
  },
});
