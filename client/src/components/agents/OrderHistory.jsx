import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../consts/colors";
import { format } from "timeago.js";

export const OrderHistory = () => {
  const getOrderHistory = useSelector(
    (state) => state.ordersummary?.orderHistory
  );
  return (
    <SafeAreaView style={style.conctainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: "#000000999" }}
      >
        {getOrderHistory.length === 0 ? (
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontSize: 20 }}>Your transaction is empty</Text>
          </View>
        ) : (
          getOrderHistory.map((order) => (
            <View style={style.card} key={order._id}>
              <View>
                <Text style={style.cardTxt}>ORDER ID: {order._id}</Text>
                <Text style={style.cardTxt}>
                  TOTAL COST &#x20B5;: {order.total}
                </Text>
                <Text style={style.cardTxt}>
                  DATE: {format(order.createdAt)}
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  conctainer: {
    flex: 1,
  },
  card: {
    height: 120,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 15,
  },
  cardTxt: {
    margin: 3,
    fontSize: 16,
  },
});
