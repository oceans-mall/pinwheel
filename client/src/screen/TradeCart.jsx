 import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";
import { Trade } from "./Trade";

export const TradeCart = ({ navigation }) => {
const total = useSelector((state) => state.order?.total)
const orders = useSelector(state => state.order?.product)
console.log(orders);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.cartHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={25}
              color={COLORS.primary}
              style={{
                padding: 3,
                backgroundColor: COLORS.white,
                marginLeft: 5,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Trade Summary
          </Text>
          <View></View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View style={styles.tradeDisplay}>
          {orders.length > 0 &&
            orders.map((order) => (
              <Trade
                price={order.price}
                weight={order.weight}
                name={order.name}
                key={order.id}
              />
            ))}
        </View>
        </ScrollView>
        <View
          style={{
            flex: 0.05,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.txt}>Total Amount:</Text>
          <TouchableOpacity>
            <Text style={styles.txt}> &#x20B5;{total} </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.05,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.primary,
            padding: 10,
            margin: 10,
            borderRadius: 20,
          }}
        >
          {/* onPress={() => navigation.navigate('Agent', {screen:"Order History"})} */}
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              SELL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartHeader: {
    flex: 0.1,
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    flexDirection:"row",
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
  tradeDisplay: {
    flex: 1,
    padding: 5,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
