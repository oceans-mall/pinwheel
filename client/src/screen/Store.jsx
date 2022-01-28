import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import COLORS from "../consts/colors";
import fish from "../consts/fish";

const width = Dimensions.get("screen").width / 2 - 30;

export const Store = ({ navigation }) => {
  const cat = [
    "SHRIMPS",
    "OCEANMIX",
    "PRAWNS",
    "SQUID",
    "CASSAVA FISH",
    "GROUPER-FISH",
    "LOBSTER",
    "RED-FISH",
    "TILAPIA",
    "OCTOPUS",
  ];
  const [catIndex, setCatIndex] = useState(0);
  const CatList = () => {
    return (
      <View style={styles.catContaner}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cat.map((item, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => setCatIndex(i)}
                activeOpacity={0.8}
                style={{ marginRight: 10, backgroundColor:'#000',padding:3,borderRadius:10 }}
              >
                <Text
                  style={[
                    styles.catText,
                    catIndex === i && styles.catTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  const Card = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
        <View style={styles.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: item.like
                  ? "rgba(245,42,42,0.2)"
                  : "rgba(0,0,0,0.2)",
              }}
            >
              <Ionicons
                name="heart-circle-outline"
                size={18}
                color={item.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>
          <View style={{ height: 100, alignItems: "center" }}>
            <Image
              source={item.img}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              &#x20B5;{item.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: "green",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to </Text>
          <Text
            style={{ fontSize: 28, fontWeight: "bold", color: COLORS.primary }}
          >
            Oceans Mall
          </Text>
        </View>
        <Ionicons name="cart-outline" size={25} />
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={25}
            style={{ marginLeft: 20 }}
          />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.sortBtn}>
          <AntDesign name="filter" size={25} style={{ color: "white" }} />
        </View>
      </View>
      <CatList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={fish}
        renderItem={({ item }) => <Card item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 5,
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  catContaner: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  catText: {
    margin:5,
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
  catTextSelected: {
    // color: COLORS.primary,
    paddingBottom: 5,
    borderBottomWidth: 2,
    // borderColor: COLORS.primary,
  },
  card: {
    height: 225,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 2,
    width,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
});
