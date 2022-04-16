import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../consts/colors";
import { Chart } from "./LineChart";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export const Dashboard = ({ navigation }) => {
  const [tradeTotal, settradeTotal] = useState(0);
  const [count, setCount] = useState(0);
  //get total registered fishermen
  const getProfile = useSelector((state) => state.profile);
  const agent_id = useSelector((state) => state.user.currentUser?._id);

  useEffect(() => {
    folk();
  }, [getProfile]);
  const folk = () =>
    getProfile.folks.map((item) =>
      item.userId === agent_id ? setCount([item].length) : null
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={25} color={"white"} />
        </TouchableOpacity>
        <View style={{ position: "relative" }}>
          <TouchableOpacity onPress={() => navigation.navigate("History")}>
            <Ionicons name="notifications" size={25} color={"white"} />
          </TouchableOpacity>
          <Text
            style={{
              position: "absolute",
              fontSize: 18,
              top: -12,
              left: 10,
              color: "red",
              fontWeight: "bold",
            }}
          >
            5
          </Text>
        </View>
      </View>
      <View animation="zoomIn" style={{ flex: 1 }}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 5,
          }}
        >
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Trade Total</Text>
            <Text style={styles.tradeAmount}>&#x20B5; {tradeTotal}</Text>
          </View>
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Registered Fishermen</Text>
            <Text style={styles.tradeAmount}>{count}</Text>
          </View>
        </View>
        <Chart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trade: {
    width: 150,
    height: 150,
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
    textAlign: "center",
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: "600",
  },
  tradeAmount: {
    color: COLORS.primary,
    marginTop: 5,
    fontSize: 20,
  },
  header: {
    height: 60,
    padding: 5,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
