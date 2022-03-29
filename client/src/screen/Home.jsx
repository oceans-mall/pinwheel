import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../consts/colors";
import { useDispatch } from "react-redux";
import { products } from "../redux/apiCalls";
import avatar from "../../assets/useravatar.png";
const categories = [
  { id: "1", name: "shrimps" },
  { id: "2", name: "oceansMix" },
  { id: "3", name: "prawns" },
  { id: "4", name: "octopus" },
  { id: "5", name: "red fish" },
  { id: "6", name: "cassava Fish" },
  { id: "7", name: "lobsters" },
  { id: "8", name: "tilapia" },
  { id: "9", name: "grouper Fish" },
  { id: "10", name: "squid" },
];
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export const Home = ({ navigation }) => {
  const [selectedCatIndex, setselectedCatIndex] = useState(0);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.currentUser?.firstname);
  const product = useSelector((state) => state.product.products);

  //getting data from api
  useEffect(() => {
    products(dispatch);
  }, [dispatch]);

  //search function
  const search = (data) =>
    data.filter((item) => item.name.toLowerCase().includes(query));

  const ListCat = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.catListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setselectedCatIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCatIndex == index ? COLORS.primary : COLORS.light,
                height: 45,
                width: 120,
                marginRight: 7,
                borderRadius: 30,
                alignItems: "center",
                paddingHorizontal: 5,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color:
                    selectedCatIndex == index ? COLORS.white : COLORS.primary,
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 10,
                  textTransform: "capitalize",
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const CardList = ({ items }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Details", items)}
      >
        <View style={style.card}>
          <View style={{ alignItems: "center", top: -40 }}>
            <Image
              source={items.img}
              style={{ height: 120, width: 120, borderRadius: 20 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {items.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 2,
                color: "gray",
              }}
            >
              {items.mix}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              &#x20B5; {items.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Ionicons name="add" size={20} color={COLORS.white} />
            </View>
          </View>
          <View>
            <Text
              style={{
                margin: 10,
                textAlign: "left",
                fontWeight: "bold",
                fontSize: 15,
                color: items.inStock ? "green" : "red",
              }}
            >
              inStock
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25 }}>Hello,</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
              {username}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 20, color: "gray" }}>
            What do you want today
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={avatar}
            style={{ height: 40, width: 40, borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={style.inputContainer}>
          <AntDesign name="search1" size={25} />
          <TextInput
            style={{ flex: 1, fontSize: 18, height: 30 }}
            placeholder="Search"
            onChangeText={(val) => setQuery(val)}
          />
        </View>
        <View style={style.sortBtn}>
          <AntDesign name="filter" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCat />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={search(product)}
        renderItem={(item) => <CardList items={item.item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catListContainer: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  catBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  catBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,

    elevation: 15,
    backgroundColor: "white",
  },
  addToCartBtn: {
    backgroundColor: COLORS.primary,
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
