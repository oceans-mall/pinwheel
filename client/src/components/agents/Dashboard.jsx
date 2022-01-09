import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import COLORS from "../../consts/colors";
import { Chart } from "./LineChart";
import { RecentTrade } from "./RecentTrade";
import * as Animatable from "react-native-animatable"

export const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View animation="zoomIn" style={{ flex: 1 }}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            //padding: 5,
            margin: 5,
          }}
        >
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Trade Total</Text>
            <Text style={styles.tradeAmount}>GHS</Text>
            <Text style={styles.tradeAmount}>1000</Text>
          </View>
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Fishermen</Text>
            <Text style={styles.tradeAmount}>50</Text>
          </View>
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Purchase</Text>
            <Text style={styles.tradeAmount}>GHS</Text>
            <Text style={styles.tradeAmount}>100</Text>
          </View>
        </View>
        <Chart />
        {/* <RecentTrade /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trade: {
    height: "80%",
    width: "30%",
    borderRadius: 10,
    borderColor: "gold",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 7,
  },
  tradeTitle: {
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: "600",
  },
  tradeAmount: {
    color: COLORS.primary,
    marginTop: 5,
    fontSize: 20,
  },
});
