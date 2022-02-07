import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";
import fish from "../consts/fish";

export const ShoppingCart = ({ navigation }) => {

//get cart state
const cart = useSelector((state) => state.cart.cart)

//get total cost
const total = useSelector((state) => state.cart.total)
  const CartCard = ({ items }) => {
    return (
      <View style={style.cartCard}>
        <Image
          source={items.img}
          style={{
            marginLeft: 5,
            height: 70,
            width: 70,
            borderRadius: 50,
            padding: 5,
          }}
        />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{items.name}</Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 10, color: COLORS.gray }}
          >
            {items.mix}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          &#x20B5;{items.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{items.quantity}</Text>
          <View style={style.actionBtn}>
            <Ionicons name="remove" size={25} color={COLORS.white} />
            <Ionicons name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <AntDesign
          name="arrowleft"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 23,
            marginLeft: 8,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Cart
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cart}
        renderItem={(item) => <CartCard items={item.item} />}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Cost
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>&#x20B5; {total}</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity onPress={() =>navigation.navigate("Payment")}>
                <View style={style.btn}>
                  <Text style={style.btnText}>CHECKOUT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: " row",
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
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height:60,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary, 
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
  },
});
