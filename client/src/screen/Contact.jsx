import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import COLORS from "../consts/colors";

export const Contact = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          margin: 5,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textDecorationLine: "underline",
            color:'gray',
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

          <View style={style.contact}>
            <AntDesign name="weibo-circle" color="blue" size={30} />
            <Text style={style.contactTxt}>www.theoceansmall.com</Text>
          </View>
          <View style={style.contact}>
            <Ionicons name="location-outline" size={30} color="green" />
            <Text style={style.contactTxt}>Lapaz &</Text>
            <Text style={style.contactTxt}>Tse Addo</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  contact: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    padding: 15,
    margin: 15,
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
  contactTxt: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight:'normal',
    fontStyle:'italic',
    color:'white',
    textAlign:'center'
  },
});
