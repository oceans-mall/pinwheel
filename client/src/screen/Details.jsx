import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../consts/colors";
import { addToCart } from "../redux/cartRedux";

export const Details = ({ navigation, route }) => {
  const fish = route.params;
  const [quantity, setQty] = useState(0);

  const disptach = useDispatch();
  const cart = useSelector((state) => state.cart?.quantity);

  useEffect(() => {
    handleBuyBtn();
  }, []);

  const handlePress = (direction) => {
    if (direction === "l") {
      quantity > 1 && setQty(quantity - 1);
    } else {
      setQty(quantity + 1);
    }
  };

  //handle buy button method
  const handleBuyBtn = () => {
    if (quantity === 0) {
      ToastAndroid.showWithGravity(
        "Please add quantity",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      disptach(addToCart({ ...fish, quantity }));
    }
  };
  //handle cart?
  const cartPressed = () => {
    cart === 0
      ?   ToastAndroid.showWithGravity(
        "sorry your car is empty",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      )
      : navigation.navigate("Cart");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View></View>
        {/* {cart? icon container} */}
        <View
          style={{
            postion: "relative",
            backgroundColor: COLORS.primary,
            width: 30,
            height: 30,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="cart-outline"
            size={25}
            color={"white"}
            onPress={cartPressed}
          />
          <Text
            style={{
              position: "absolute",
              color: COLORS.red,
              fontSize: 18,
              fontWeight: "bold",
              top: -13,
              left: 10,
            }}
          >
            {cart}
          </Text>
        </View>
      </View>
      <View style={style.imgContainer}>
        <Image
          source={{uri:'https://media.istockphoto.com/photos/cajun-shrimp-picture-id610264540?k=20&m=610264540&s=612x612&w=0&h=t8itrUvoPswsVV7FiHdVKTNuMjA8m3hGPa7b1rXZXls='}}
          style={{ resizeMode: "cover", flex: 1, height:"100%", width: "100%" }}
        />
      </View>
      <View style={style.detailsContaner}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 13,  fontFamily:"Bitter",}}>Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            margnTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontFamily:"Bitter", }}>{fish?.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: "white",
                fontSize: 16,
                textAlign: "center",
                fontFamily:"Bitter",
              }}
            >
              &#x20B5;{fish?.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text
            style={{
              color: "gray",
              fontSize: 13,
              lineHeight: 22,
              marginTop: 10,
              fontFamily:"Bitter",
            }}
            numberOfLines={3}
          >
            {fish?.desc || "Nothing selected"}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => handlePress("l")}>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>-</Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontFamily:"Bitter",
                }}
              >
                {quantity}
              </Text>
              <View style={style.borderBtn}>
                <TouchableOpacity onPress={() => handlePress("r")}>
                  <View style={style.borderBtn}>
                    <Text style={style.borderBtnText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.buyBtn}>
              <TouchableOpacity onPress={handleBuyBtn}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 12,
                    fontFamily:"Bitter",
                    fontWeight: "bold",
                  }}
                >
                  ADD TO CART
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContaner: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
  },
  borderBtn: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  borderBtnText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  buyBtn: {
    width: 120,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
