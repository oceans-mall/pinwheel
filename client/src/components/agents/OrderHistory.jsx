import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

import DataTable, { COL_TYPES } from "react-native-datatable-component";

export const OrderHistory = () => {
  const orderhistory = useSelector((state) => state.ordersummary?.orderHistory);
  // const user = useSelector((state) => state.user.currentUser._id);
  console.log(orderhistory);
  return (
    <SafeAreaView style={style.container}>
      <View style={{ flex: 1, backgroundColor: "#000000999", margin: 5 }}>
        <DataTable
          data={orderhistory}
          colNames={["_id", "quantity", "createdAt", "total", "fishermanId"]}
          backgroundColor={"rgba(23,2,4,0.01)"}
          noOfPages={20}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  thead: {
    fontSize: 15,
    textAlign: "center",
  },
});
