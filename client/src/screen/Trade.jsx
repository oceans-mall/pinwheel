import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../consts/colors";

export const Trade = ({ weight, price, name }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginHorizontal: 5 }}>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
          >
            {name.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Price: &#x20B5;{price}</Text>
        <Text style={styles.text}>Quantity: {weight}kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: "20%",
    alignItems: "center",
    padding: 5,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  text: { fontSize: 18, padding: 5, fontWeight: "600", color: COLORS.primary },
});
