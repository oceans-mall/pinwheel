import { Ionicons } from "@expo/vector-icons";
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

const menu = [
  {
    id: 1,
    name: "AGENTS",
    icon: "card-outline",
    nav: "Login",
  },
  {
    id: 2,
    name: "SHOP",
    icon: "card-outline",
    nav: "Shop",
  },
  {
    id: 3,
    name: "MARKET INFO",
    icon: "dotchart",
    nav: "",
  },
  {
    id: 4,
    name: "DISTRIBUTORS",
    icon: "people-outline",
    nav: "",
  },
  {
    id: 5,
    name: "WEATHER",
    icon: "rainy-outline",
    nav: "",
  },
  {
    id: 6,
    name: "CONTACT US",
    icon: "call-outline",
    nav: "Contact",
  },
];

export const Service = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <Animatable.View animation="fadeInDown" style={styles.container}>
        <View style={styles.s_wrapper}>
          <Text style={[styles.s_txt, styles.titleTxt]}>PINWHEEL</Text>
          <View style={styles.services}>
            {menu.map((item) => (
              <View style={styles.item} key={item.id}>
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => navigation.navigate(item.nav)}
                >
                  <Text style={styles.txt}>{item.name}</Text>
                  <Ionicons name={item.icon} size={30} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
}
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
    fontFamily:"Bitter",
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
    fontSize: 16,
    fontWeight: "normal",
    fontFamily:"Bitter"
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
