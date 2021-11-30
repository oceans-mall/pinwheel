import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../../consts/colors";
import { profile } from "../../redux/apiCalls";

export const Profile = () => {

  const [ firstname, setFirstname ] = useState("")
  const [ lastname, setLastname ] = useState("")
  const [ age, setAge ] = useState("")
  const [ contact, setContact ] = useState("")
  const [ location, setLocation ] = useState("")
  const [ region, setRegion ] = useState("")

  const { isProfiling, error } = useSelector((state) => state.profile)
  const dispatch = useDispatch();

  const handleProfile = () => {
    profile(dispatch, {
      firstname, lastname, age, contact, location, region
    })
  }
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.login}>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            CREATE FISHERMAN
          </Text>
          <TextInput
            placeholder="Firstame"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            onChangeText={(firstname) => setFirstname(firstname)}
          />
          <TextInput
            placeholder="Lastname"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            onChangeText={(lastname) => setLastname(lastname)}
          />
          <TextInput
            placeholder="Age"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            onChangeText={(age) => setAge(age)}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            keyboardType='number-pad'
            onChangeText={(contact) => setContact(contact)}
          />
          <TextInput
            placeholder="Location"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            onChangeText={(location) => setLocation(location)}
          />
          <TextInput
            placeholder="Region"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            onChangeText={(region) => setRegion(region)}
          />
        </View>
        <TouchableOpacity
          disabled={isProfiling}
          activeOpacity={0.8}
          onPress={handleProfile}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnTxt}>CREATE</Text>
          </View>
        </TouchableOpacity>
        {
          error && <Text>Missing Details...</Text>
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  login: {
    flex: 1,
    top: -15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textLayout: {
    fontSize: 16,
    alignSelf: "stretch",
    height: 50,
    borderRadius: 5,
    width: 270,
    marginBottom: 20,
    paddingLeft: 5,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    textAlign: "center",
    color: COLORS.primary,
    backgroundColor: COLORS.silver,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 270,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  btnTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.white,
  },
  
});

