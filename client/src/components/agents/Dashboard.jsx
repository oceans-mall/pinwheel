import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView , TouchableOpacity} from "react-native";
import COLORS from "../../consts/colors";
import { Chart } from "./LineChart";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";


export const Dashboard = ({navigation}) => {
  const [tradeTotal, settradeTotal] = useState(0);
  const [purchase, setPurchase] = useState(0);

  //get total registered fishermen
  const count = useSelector(state => state.profile.folks.length)
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={25} color={'white'} style={{marginLeft:3}} />
        </TouchableOpacity>
      </View>
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
          <Text style={styles.tradeAmount}>{tradeTotal}</Text>
          </View>
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Number of Fishermen</Text>
            <Text style={styles.tradeAmount}>{count}</Text>
          </View>
          <View style={styles.trade}>
            <Text style={styles.tradeTitle}>Purchase</Text>
            <Text style={styles.tradeAmount}>GHS</Text>
            <Text style={styles.tradeAmount}>{purchase}</Text>
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
    textAlign:'center',
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
    paddingTop: 15,
    backgroundColor: COLORS.primary,
  },
  title: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
