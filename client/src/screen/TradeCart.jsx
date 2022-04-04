import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../consts/colors";
import { addToOrder } from "../redux/apiCalls";
import { clearOrder, deleteOrder } from "../redux/orderRedux";
export const TradeCart = ({ navigation }) => {
  const total = useSelector((state) => state.order?.total);
  const products = useSelector((state) => state.order?.product);
  const quantity = useSelector((state) => state.order?.quantity);
  const userId = useSelector((state) => state.order?.userId);
  const fishermanId = useSelector((state) => state.order?.fishermanId);

  const dispatch = useDispatch();

  const deleteItem = (id, cost) => {
    dispatch(deleteOrder({ id, cost }));
  };

  const handleOrder = () => {
    quantity === 0
      ? console.log("failed")
      : addToOrder(dispatch, { products, quantity, total, userId, fishermanId })
      ? setTimeout(() => {
          dispatch(clearOrder());
          navigation.navigate("Payment");
        }, 3000)
      : null;
  };
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 17,
            color: "#828582",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {item.name}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>Price: &#x20B5;{item.price}</Text>
        <Text style={styles.text}>Quantity: {item.weight}kg</Text>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
          Cost: &#x20B5;{item.cost}
        </Text>
        <Ionicons
          onPress={() => deleteItem(item.id, item.cost)}
          name="trash-bin"
          size={15}
          color="red"
          style={{ alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );
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
            My Basket
          </Text>
          <View></View>
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, i) => item.id}
        />
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
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.primary,
            padding: 10,
            margin: 10,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={handleOrder}>
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
    height: 50,
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
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
    height: 80,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 2,
  },
  text: {
    fontSize: 15,
    padding: 5,
    fontWeight: "normal",
    color: "#9ea89e",
    textTransform: "capitalize",
  },
});
