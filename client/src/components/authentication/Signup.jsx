import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Modal,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import COLORS from "../../consts/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";

export const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [isOpen, setIndicator] = useState(false);
  const { error, success } = useSelector((state) => state.register);
  const [modalopen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const { check_textInputChange, secureTextEntry, ...others } = data;

  //handle submit
  const handleSubmit = () => {
    register(dispatch, {
      ...others,
    });
    setIndicator(true);
    setTimeout(() => {
      setIndicator(false);
      navigation.navigate("Login");
    }, 3000);
  };

  //handle inputchage for email
  const textInputChange = (val) => {
    setData({
      ...data,
      email: val,
      check_textInputChange: false,
    });
  };
  const textInputChangeFname = (fname) => {
    setData({
      ...data,
      firstname: fname,
      check_textInputChange: false,
    });
  };
  const textInputChangeLname = (lname) => {
    setData({
      ...data,
      lastname: lname,
      check_textInputChange: false,
    });
  };
  const textInputChangePhone = (mobile) => {
    setData({
      ...data,
      phone: mobile,
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
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, color: "#fff" }}>JOIN US FOR FREE</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.text_footer}>First Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Firstname"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(fname) => textInputChangeFname(fname)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Last Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Lastname"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(lname) => textInputChangeLname(lname)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>Mobile Number</Text>
          <View style={styles.action}>
            <FontAwesome name="mobile-phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Your phone number"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="number-pad"
              onChangeText={(mobile) => textInputChangePhone(mobile)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="**********"
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
                onPress={handleSubmit}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
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
                  marginTop: 15,
                },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: COLORS.primary,
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text>
              By signing up with us you agree to our
              <TouchableOpacity>
                <Text
                  style={{
                    color: COLORS.primary,
                    textDecorationLine: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Terms and Conditions
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modal: {
    width: 200,
    height: 100,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  modal_title: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modal_body: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_btn: {
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  text_footer: {
    marginTop: 10,
    color: "#05375a",
    fontSize: 13,
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
    marginTop: 35,
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
});
