import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import COLORS from "../consts/colors";
import * as Animatable from "react-native-animatable";

export const Service = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <Animatable.View animation="fadeInDown" style={styles.container}>
        <View style={styles.s_wrapper}>
          <Text style={[styles.s_txt, styles.titleTxt]}>OCEANS-MALL</Text>
          <View style={styles.services}>
            <View style={styles.item}>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.txt}>TRADE</Text>
                <Ionicons
                  name="card-outline"
                  size={50}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() =>navigation.navigate("Store")}>
                <Text style={styles.txt}>SHOP</Text>
                <Ionicons
                  name="cart-outline"
                  size={50}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <Text style={styles.txt}>MARKET INFO</Text>
              <AntDesign name="dotchart" size={50} color={COLORS.primary} />
            </View>
            <View style={styles.item}>
              <Text style={styles.txt}>DISTRIBUTORS</Text>
              <Ionicons
                name="people-outline"
                size={50}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.item}>
              <Text style={styles.txt}>WEATHER REPORT</Text>
              <Ionicons name="rainy-outline" size={50} color={COLORS.primary} />
            </View>
            <View style={styles.item}>
              <Text style={styles.txt}>CONTACT US</Text>
              <Ionicons name="call-outline" size={50} color={COLORS.primary} />
            </View>
          </View>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  s_wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  s_txt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  titleTxt: {
    color: COLORS.primary,
  },
  services: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
    padding: 5,
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: "20%",
    borderWidth: 0.5,
    backgroundColor: COLORS.white,
    margin: 10,
    borderRadius: 20,
    borderColor: COLORS.secondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,

    elevation: 7,
  },
});
