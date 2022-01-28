import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../consts/colors";

export const Edit = ({ route, navigation}) => {
  const { firstname, lastname, age, location, contact, region } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{margin:5, backgroundColor:COLORS.primary, borderRadius:50, width:35, alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={{ fontSize: 20, margin: 10, color: COLORS.primary }}>
          UPDATE RECORDS
        </Text>
        <TextInput
          style={styles.inputItems}
          defaultValue={firstname}
          editable={true}
          multiline={false}
          onChangeText={(inputText) => setinputText(inputText)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={lastname}
          editable={true}
          multiline={false}
          onChangeText={(inputText) => setinputText(inputText)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={age}
          editable={true}
          multiline={false}
          onChangeText={(inputText) => setinputText(inputText)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={contact}
          editable={true}
          multiline={false}
          onChangeText={(inputText) => setinputText(inputText)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={location}
          editable={true}
          multiline={false}
          onChangeText={(inputText) => setinputText(inputText)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={region}
          editable={true}
          multiline={false}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            backgroundColor: "green",
            margin: 10,
            paddingTop: 10,
            borderRadius: 3,
          }}
          onPress={() => handleEdit()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputItems: {
    width: 200,
    height: 50,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    margin: 5,
    padding: 5,
    fontSize: 18,
  },
});
