import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../consts/colors";
import { useSelector } from "react-redux";

export const Trade = ({ quantity, price, img, type }) => {
  const [newquantity, setNewQuantity] = useState(quantity);
  const [salesprice, setPrice] = useState(price);
  let [totalcost, setTotalCost] = useState(0);

  const order = useSelector(state => state.order)
  console.log(order);
  useEffect(() => {
    setTotalCost(salesprice * newquantity);
  }, [salesprice, newquantity]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={img}
          style={{
            width: 80,
            height: 80,
            resizeMode: "cover",
            borderRadius: 50,
          }}
        />
        <View style={{ flexDirection: "column", marginHorizontal: 5 }}>
          <Text style={styles.text}>{type}</Text>
          <Text style={styles.text}>GHS {salesprice}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.text}>{newquantity}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <TouchableOpacity onPress={() => setNewQuantity(newquantity - 1)}>
            <AntDesign
              name="minus"
              size={20}
              color="white"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNewQuantity(newquantity + 1)}>
            <AntDesign name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    padding: 15,
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
  text: { fontSize: 18, padding: 5 },
});
