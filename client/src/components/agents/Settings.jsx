import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../consts/colors";

export const Settings = () => {
  const user = useSelector((state) => state.user?.currentUser);
  console.log(user);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <View style={style.container}>
        <Text style={style.txt}>Account Details</Text>
        <View style={style.details}>
          <Text style={style.txt}>
            Name : {user.firstname + " " + user.lastname}
          </Text>
          <Text style={style.txt}>Email : {user.email}</Text>
        </View>
        <Text style={style.txt}>Contact Details</Text>
        <View style={style.details}>
          <Text style={style.txt}>Phone : {user.phone}</Text>
          <Text style={style.txt}>
            Date Joined # : {user.createdAt.split("T")[0]}
          </Text>
          <Text style={style.txt}>Status: {user.isAgent && "Agent"}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  txt: {
    fontSize: 15,
    fontStyle: "normal",
    margin: 3,
    fontFamily: "Bitter",
  },
  details: {
    flexDirection: "column",
    padding: 20,
    borderRadius: 3,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.0,

    elevation: 5,
  },
});
