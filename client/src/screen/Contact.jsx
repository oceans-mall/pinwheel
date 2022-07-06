import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import COLORS from "../consts/colors";

export const Contact = ({ navigation }) => {
  const openUrl = () => {
    Linking.openURL("https://theoceansmall.com/")
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          // justifyContent: "center",
          margin: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Bitter",
            textDecorationLine: "underline",
            color: "gray",
            marginBottom: 15,
          }}
        >
          CONTACT US VIA
        </Text>
        <View>
          <View style={style.contact}>
            <Ionicons name="logo-whatsapp" size={30} color="green" />
            <Text style={style.contactTxt}>0555576869</Text>
          </View>
          <View style={style.contact}>
            <AntDesign name="phone" size={30} />
            <Text style={style.contactTxt}>0202828208</Text>
          </View>

          <View style={style.contact}>
            <AntDesign
              name="facebook-square"
              color="blue"
              size={25}
              style={{ borderRadius: 50, padding: 5 }}
            />
            <Text style={style.contactTxt}>oceansmallgh</Text>
          </View>

          <View style={style.contact}>
            <AntDesign name="instagram" size={30} color="purple" />
            <Text style={style.contactTxt}>oceansmall_seafood</Text>
          </View>

          <TouchableOpacity onPress={openUrl} style={style.contact}>
            <AntDesign name="weibo-circle" color="blue" size={30} />
            <Text style={style.contactTxt}>www.theoceansmall.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.contact}>
            <Ionicons name="location-outline" size={30} color="green" />
            <Text style={style.contactTxt}>Lapaz & Agbogba Haatso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  contact: {
    flexDirection: "row",
    padding: 15,
    margin: 10,
  },
  contactTxt: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "normal",
    fontFamily:"Bitter",
    textAlign: "center",
  },
});
