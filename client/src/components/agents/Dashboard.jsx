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
  const [count, setCount] = useState([]);
  const [notify, setNotify] = useState(0);
  //get total registered fishermen
  const getProfile = useSelector((state) => state.profile?.folks);
  const agent_id = useSelector((state) => state.user.currentUser?._id);

  const orderhistory = useSelector((state) => state.ordersummary?.orderHistory);
  console.log("order history",orderhistory);

  let sum = orderhistory?.reduce((acc,{total}) =>acc + total,0)
  console.log(sum);
  
  useEffect(() => {
    folk();
    sum
  }, []);

  const folk = () =>
    getProfile?.map((item) =>
      item.userId === agent_id ? setCount(count.push(item)) : null
    );
  console.log(count);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={25} color={"white"} />
        </TouchableOpacity>
        <View style={{ position: "relative" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Ionicons name="notifications" size={20} color={"white"} />
          </TouchableOpacity>
          <Text
            style={{
              position: "absolute",
              fontSize: 17,
              top: -12,
              left: 10,
              color: "red",
            }}
          >
            {notify}
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
            margin: 10,
          }}
        >
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Total Trade</Text>
            <Text style={styles.tradeAmount}>&#x20B5; {sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
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
    fontFamily: "Bitter",
  },
  tradeAmount: {
    color: COLORS.primary,
    marginTop: 5,
    fontSize: 18,
    fontFamily: "Bitter",
  },
  header: {
    height: 60,
    padding: 5,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
