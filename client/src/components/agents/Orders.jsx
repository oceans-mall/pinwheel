import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../consts/colors";
import DataTable from "react-native-datatable-component";

export const Orders = ({ navigation }) => {
  const number = useSelector((state) => state.user.currentUser?.phone);
  const user = useSelector((state) => state.user.currentUser?._id);
  const orders = useSelector((state) => state.ordersummary?.orders);
  const order = orders.product;

  const { firstname, lastname } = useSelector(
    (state) => state.user?.currentUser
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.paymentTotal}>
        <Text style={style.text}>Amount Receivable</Text>
        <Text style={[style.text, style.amount]}>
          &#x20B5;{" "}
          {orders.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>
      <View style={{ flex: 2, margin: 10 }}>
        <Text
          style={{
            padding: 5,
            marginBottom: 5,
            fontSize: 15,
            color: COLORS.primary,
            fontFamily: "Bitter",
            textDecorationLine: "underline",
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
      <View style={style.paymentDetails}>
        <Text style={style.paymentHeader}>PAYMENT DETAILS</Text>
        <View style={{ padding: 10 }}>
          <Text style={style.txt}>
            Name: {firstname} {lastname}
          </Text>
          <Text style={style.txt}>MOMO #: {number}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Sell")}
          style={{
            position: "absolute",
            top: 100,
            left: 300,
            padding: 10,
            backgroundColor: COLORS.primary,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
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
    fontSize: 16,
    color: COLORS.primary,
    textTransform: "capitalize",
    fontFamily: "Bitter",
  },
  paymentDetails: {
    position: "relative",
    flex: 1,
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paymentHeader: {
    textAlign: "center",
    padding: 5,
    fontSize: 18,
    fontFamily: "Bitter",
    borderBottomWidth: 0.5,
  },
  txt: {
    fontSize: 16,
    fontFamily: "Bitter",
    padding: 10,
    letterSpacing: 1.5,
  },
});
