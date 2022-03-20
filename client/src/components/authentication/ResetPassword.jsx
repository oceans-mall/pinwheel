import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import logo from "../../../assets/splash.png";
import COLORS from "../../consts/colors";
import { DontHaveAcc } from "../general/DontHaveAcc";

export const ResetPassword = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.login}>
        <Image style={styles.logo} source={logo} alt="logo" />
        <View>
          <Text
            style={{
              fontSize: 25,
              marginBottom: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            Reset Password
          </Text>
          <TextInput
            placeholder="Enter Email Address"
            required="required"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnTxt}>RESET</Text>
          </View>
        </TouchableOpacity>
       <DontHaveAcc onPress={() => navigation.navigate("Register")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  login: {
    flex: 1,
    top: -30,
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
  logo: {
    width: 400,
    height: 200,
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
  resetPswd:{
      alignSelf:'flex-end',
      marginRight: 30
  },
  resetPswdText:{
    fontSize: 12,
    color:COLORS.dark,
    textDecorationLine:'underline',
}
});
