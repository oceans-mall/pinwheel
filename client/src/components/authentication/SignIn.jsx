import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import COLORS from "../../consts/colors";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../../redux/userRedux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://153.92.210.61/api/",
});

export const SignIn = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [isOpen, setIndicator] = useState(false);

  //calling state from redux
  const { error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { check_textInputChange, secureTextEntry, ...others } = data;

  const handleSubmit = async () => {
    dispatch(loginStart());
    setIndicator(true);
    setTimeout(() => {
      setIndicator(false);
    }, 3000);
    try {
      const user = await instance.post("auth/login", others);
      dispatch(loginSuccess(user.data));
      const token = JSON.stringify(user.data.accessToken);
      await AsyncStorage.setItem("token", token);
      ToastAndroid.showWithGravity(
        "Welcome back",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      navigation.navigate("Agent");
      return user;
    } catch (err) {
     
      dispatch(loginFailure);
      err &&
      ToastAndroid.showWithGravity(
        "Login failed please check your credentials",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };

  const textInputChange = (val) => {
    setData({
      ...data,
      email: val,
      check_textInputChange: false,
    });
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "#fff", fontSize: 25 }}>WELCOME BACK</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="green" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient
            colors={[COLORS.primary, "#00d4ff"]}
            style={styles.signIn}
          >
            <TouchableOpacity
              style={{ width: "100%", alignItems: "center" }}
              activeOpacity={0.5}
              onPress={handleSubmit}
              disabled={isOpen}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <ActivityIndicator size="small" color="red" animating={isOpen} />
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: COLORS.primary,
                borderWidth: 1,
                marginTop: 10,
              },
            ]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: COLORS.secondary,
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 5, flexDirection: "row" }}>
          <Text>Forgot your password?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate("Reset")}
          >
            <Text
              style={{ color: COLORS.primary, textDecorationLine: "underline" }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 2,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    color: "gray",
    marginTop: Platform.OS === "os" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
  },
});
