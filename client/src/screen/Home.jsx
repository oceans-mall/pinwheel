import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
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

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.currentUser?.firstname);
  const product = useSelector((state) => state.product.products);

  //getting data from api
  useEffect(() => {
    products(dispatch);
  }, [dispatch]);

  const CardList = ({ items }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Details", items)}
      >
        <View style={style.card}>
          <View style={{ alignItems: "center", top: -15 }}>
            <Image
              source={{uri:'https://media.istockphoto.com/photos/cajun-shrimp-picture-id610264540?k=20&m=610264540&s=612x612&w=0&h=t8itrUvoPswsVV7FiHdVKTNuMjA8m3hGPa7b1rXZXls='}}
              style={{ height: 150, width: 130, borderRadius: 20 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontFamily: "Bitter" }}>
              {items.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Bitter",
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
            <Text style={{ fontSize: 15, fontFamily: "Bitter" }}>
              &#x20B5; {items.price}
            </Text>

            <Text
              style={{
                textAlign: "left",
                fontFamily: "Bitter",
                fontSize: 12,
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
    <SafeAreaView style={{ flex: 1,}}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18 }}>Hello,</Text>
            <Text
              style={{ fontSize: 18, fontFamily: "Bitter", marginLeft: 10 }}
            >
              {username}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              fontFamily: "Bitter",
              color: "gray",
            }}
          >
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
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={product}
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
    height: 250,
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
