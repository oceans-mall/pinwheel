import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import COLORS from "../consts/colors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable"
import pinwheel from "../../assets/lady.png"

export const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration= {1500}
          source={pinwheel}
          resizeMode="cover"
          style={styles.logo}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Get fresh seafoods from Ghana's finest fisher folks</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={[COLORS.primary, "#00d4ff"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#05375a",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
