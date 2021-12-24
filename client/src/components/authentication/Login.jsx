import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";
import { DontHaveAcc } from "../general/DontHaveAcc";
import { login } from "../../redux/apiCalls";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch((state) => state.user);

  const handle = React.useMemo(() => {
      const click = async () => {
          login(dispatch, {username, password})
      }
      click()
  })
  const handleClick = () => {
    login(dispatch, { username, password });
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.login}>
        <View style={{ flex: 0.6 }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            Sign In Here
          </Text>
          <TextInput
            placeholder="Username"
            required={true}
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            textDecorationLine="#fff"
            style={styles.textLayout}
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.primary}
            underlineColorAndroid={"transparent"}
            style={styles.textLayout}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <View style={styles.resetPswd}>
            <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
              <Text style={styles.resetPswdText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleClick}
            disabled={isFetching}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btnTxt}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.message, { color: error ? "red" : "green" }]}>
            {error && "Incorrect details"}
          </Text>
          <DontHaveAcc onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
  },
  login: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  logo: {
    flex: 0.4,
    width: 400,
    height: 150,
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
  resetPswd: {
    // alignSelf: "flex-end",
    marginRight: 25,
  },
  resetPswdText: {
    fontSize: 12,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  message: { color: "red", marginBottom: 5, fontSize: 13 },
});
