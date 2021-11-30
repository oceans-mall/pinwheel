import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import COLORS from "../consts/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { DATA } from "../consts/services";

export const Services = ({ navigation }) => {
  const [listServices, setServices] = useState(DATA);

  const translateX = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const Service = ({ title, img, id }) => (
    <Animated.View style={styles.item}>
      <Image
        style={{
          resizeMode: "cover",
          height: 90,
          width: "100%",
          borderRadius: 5,
        }}
        source={img}
      />
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  });

  const renderService = ({ item }) => (
    <Service title={item.title} img={item.img} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.servicesContainer}>
        <View style={styles.topSection}>
          <View>
            <TouchableOpacity
              // style={styles.iconContainer}
              onPress={() => navigation.navigate("Register")}
            >
              <Ionicons name="create" size={18} color={COLORS.white} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", color: COLORS.white }}
          >
            Oceans-Mall
          </Text>
          <View>
            <TouchableOpacity
              // style={styles.iconContainer}
              onPress={() => navigation.navigate("Login")}
            >
              <AntDesign name="login" size={18} color="white" />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.services}>
          <View
            style={{
              flex: 1,
              marginVertical: 10,
              justifyContent: "space-evenly",
            }}
          >
            <FlatList
              data={listServices}
              renderItem={renderService}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  servicesContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  topSection: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    padding: 10,
    borderTopColor: COLORS.white,
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  services: {
    flex: 1,
    alignContent: "center",
    marginHorizontal: 10,
  },
  item: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    position: "relative",
  },
  titleContainer: {
    alignSelf: "flex-start",
    marginLeft: 10,
    position: "absolute",
    zIndex: 2,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
    borderRadius: 20,
  },
});
