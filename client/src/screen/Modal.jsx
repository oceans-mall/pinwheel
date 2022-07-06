import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";

export const Modal = ({ route, navigation }) => {
  console.log(route.params);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.centeredView}>
          <Text style={{ padding: 5, textDecorationLine: "underline", fontFamily:'Bitter' }}>
            ORDER DETAILS
          </Text>
          {route.params.product.map((item, key) => (
            <View style={styles.modalView} key={key}>
              <Text style={styles.modalText}>ID : {item.id}</Text>
              <Text style={styles.modalText}>
                ITEM : {item.name.toUpperCase()}
              </Text>
              <Text style={styles.modalText}>WEIGHT : {item.weight}kg</Text>
              <Text style={styles.modalText}>
                TOTAL COST : GH&#x20B5; {item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pending: {
    color: "red",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Bitter"
  },
});
