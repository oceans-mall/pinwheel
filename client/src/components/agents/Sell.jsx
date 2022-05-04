import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Picker,
} from "react-native";
import COLORS from "../../consts/colors";
import { useDispatch, useSelector } from "react-redux";
import { Fishes, Sources } from "../../redux/apiCalls";
import { addOrder } from "../../redux/orderRedux";
import { Indicator } from "../general/Modal";

export const Sell = ({ navigation }) => {
  const [sourcetype, setSource] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [fisherman, setFisherman] = useState("");
  const [fisherId, setFisherID] = useState("");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [fish_id, setId] = useState("");
  const folk = useSelector((state) => state.profile?.folks);
  const sources = useSelector((state) => state.source?.sources);
  const fishes = useSelector((state) => state.fish?.fish);
  const cart = useSelector((state) => state.order.quantity);
  const agent = useSelector((state) => state.user.currentUser?._id);
  const [indicator, setIndicator] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Sources(dispatch);
    Fishes(dispatch);
    getPrice();
  }, [dispatch, selectedValue]);

  const name = () => {
    const person = folk.filter((item) =>
      item.fisherId.toString().includes(query)
    );
    person.forEach((element) => {
      setFisherman(element.firstname) ||
        setLocation(element.location) ||
        setFisherID(element.fisherId);
    });
  };

  const m = sources.map((el) =>
    el.source.map((item, i) => (
      <Picker.Item
        key={item._id}
        label={item}
        value={item.toLowerCase()}
        color={COLORS.primary}
      />
    ))
  );

  //get selected item price
  const getPrice = () =>
    fishes.map((item) =>
      item.name === selectedValue
        ? setPrice(item.price) || setId(item._id)
        : null
    );
  //handle add to basket
  const handleAddBtn = () => {
    weight === 0
      ? "Please add quantity"
      : dispatch(
          addOrder({
            fisherId,
            agent,
            products: {
              id: fish_id,
              name: selectedValue,
              price: price,
              cost: price * weight,
              weight: weight,
            },
            weight,
            price,
          })
        );
  };

  const handleDone = () => {
    if (cart === 0) {
      Alert.alert("Cart is empty");
    } else {
      setIndicator(true);
      setTimeout(() => {
        setIndicator(false);
        navigation.navigate("Cart");
      }, 3000);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Indicator show={indicator} />
      <View
        style={{
          backgroundColor: COLORS.secondary,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={20} color={COLORS.white} />
        </TouchableOpacity>
        <View style={{ position: "relative" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Ionicons name="basket-outline" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.cart}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {cart}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        {/* search box */}
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="Enter fisherman ID "
            onChangeText={(text) => setQuery(text)}
            placeholderTextColor={COLORS.secondary}
            style={styles.search}
            underlineColorAndroid="transparent"
          />
          <Button title="Search" onPress={query ? name : null} />
        </View>
        <View style={{ flexDirection: "column" }}>
          {/* name container */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={styles.text}>Name:</Text>
            <Text style={styles.titleText}>{fisherman}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Fish-Type:</Text>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150, marginLeft: 10 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              {fishes.map((item) => (
                <Picker.Item
                  key={item._id}
                  label={item.name}
                  value={item.name}
                  color={COLORS.primary}
                />
              ))}
            </Picker>
          </View>
          {/* source picker */}
          <View style={styles.content}>
            <Text style={styles.text}>Source:</Text>
            <Picker
              selectedValue={sourcetype}
              onValueChange={(value) => setSource(value)}
              style={{ width: 120, height: 50 }}
              dropdownIconColor={COLORS.primary}
            >
              {m}
            </Picker>
          </View>
          {/* location */}
          <View style={styles.content}>
            <Text style={styles.text}>Location:</Text>
            <Text style={styles.titleText}>{location}</Text>
          </View>
          {/* Weight */}
          <View style={styles.content}>
            <Text style={styles.text}>Weight(kg): </Text>
            <TextInput
              placeholder="Enter"
              name="Weight"
              onChangeText={(text) => setWeight(text)}
              placeholderTextColor={COLORS.secondary}
              style={styles.textItem}
              underlineColorAndroid="transparent"
            />
          </View>
          {/* price */}
          <View style={styles.content}>
            <Text style={styles.text}>Price(/kg): &#x20B5; </Text>
            <Text style={styles.textItem}> {price}</Text>
          </View>
        </View>
      </ScrollView>
      {/* Bottom */}
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={styles.bottomContaner}>
          <TouchableOpacity style={styles.touch} onPress={handleAddBtn}>
            <Text style={styles.txt}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContaner}>
          <TouchableOpacity
            style={[styles.touch, styles.doneColor]}
            onPress={handleDone}
          >
            <Text style={styles.txt}>DONE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  search: {
    width: 200,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginLeft: 10,
    padding: 5,
    fontSize: 18,
  },
  textItem: {
    width: 70,
    height: 30,
    borderWidth: 0.5,
    alignItems: "center",
    paddingLeft: 3,
    fontSize: 20,
  },
  bottomContaner: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  doneColor: {
    backgroundColor: "green",
  },
  txt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  touch: {
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  cart: {
    position: "absolute",
    top: -5,
    right: 5,
    backgroundColor: "red",
    borderRadius: 50,
    padding: 1,
    width: 15,
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    height: 60,
  },
});
