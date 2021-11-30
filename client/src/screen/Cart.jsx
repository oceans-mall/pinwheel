import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { PrimaryButton } from "../components/general/Buttons";
import COLORS from "../consts/colors";
import { trades } from "../consts/dummyData";
import { Trade } from "./Trade";

export const Cart = ({ navigation }) => {
  const [trade, setTrade] = useState(trades);
  

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
        <View style={styles.tradeDisplay}>
          {trade.length > 0 &&
            trade.map((trade) => (
              <Trade
                price={trade.price}
                quantity={trade.quantity}
                img={trade.img}
                type={trade.fishType}
                key={trade.id}
              />
            ))}
        </View>
        <View
          style={{
            flex: 0.05,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.txt}>Total Cash</Text>
          <TouchableOpacity>
            <Text style={styles.txt}>GHS </Text>
          </TouchableOpacity>
        </View>
        <PrimaryButton title="CHECKOUT"/>
        {/* <View
          style={{
            flex: 0.05,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.primary,
            padding: 10,
            margin:10,
            borderRadius:20
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              CHECKOUT
            </Text>
            
          </TouchableOpacity>
          
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartHeader: {
    flex: 0.1,
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
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
    flex: 0.8,
    padding:5,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
