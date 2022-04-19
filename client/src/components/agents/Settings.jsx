import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const Settings = () => {
      const user = useSelector((state) => state.user.currentUser)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor: "#0009999",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "gray",
              borderRadius: 50,
            }}
          ></View>
          <View style={{ marginVertical: 5 }}>
            <Text style={style.txt}>Name: {user.firstname + " " + user.lastname}</Text>
            <Text style={style.txt}>Email: {user.email}</Text>
          </View>
        </View>
        <View style={{ flex: 3, padding: 10 }}>
        <Text style={style.detailTxt}>Phone Number: {user.phone}</Text>
        <Text style={style.detailTxt}>Momo Number: {user.phone}</Text>
        <Text style={style.detailTxt}>Account Status: {user.isAgent ? <Text>Agent</Text> : null}</Text>
        <Text style={style.detailTxt}>Location: </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.0,

    elevation: 5,
  },
  txt: {
    fontSize:20,
    fontStyle:'italic',
    margin:3
  },
  detailTxt:{
  fontSize:20,
  marginBottom:10,
  fontWeight:'600'
  }
});
