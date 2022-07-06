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
  Modal,
  Pressable,
  ToastAndroid,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
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
  const [fontLoaded, setfontLoaded] = useState(false);
  const [modal, setModal] = useState(false);

  const total = useSelector((state) => state.order?.total);

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
    clearInput();
    // setModal(true);
    ToastAndroid.showWithGravity(
      "Item added successfully",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  //clear input after submition
  const clearInput = () => {
    return setPrice(""), setSelectedValue(""), setSource(""), setWeight("");
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
      <Modal
        transparent
        visible={modal}
        onRequestClose={() => setModal(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <View style={styles.modal_header}>
              <Text>SUMMARY</Text>
            </View>
            <View style={styles.modal_body}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "BarlowCondensed",
                  fontWeight: "normal",
                }}
              >
                {" "}
                Total Amount: &#x20B5; {total}
              </Text>
            </View>
            <Pressable
              style={{
                alignItems: "center",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: "#00ffff",
              }}
              onPress={() => setModal(false)}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={{ fontSize: 16 }}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Indicator show={indicator} />
      <View
        style={{
          backgroundColor: COLORS.secondary,
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
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
          {/* <Button title="Search"  /> */}
          <TouchableOpacity
            onPress={query ? name : null}
            on
            style={styles.searchBtn}
          >
            <Text style={{ color: "#fff" }}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", marginTop: 20 }}>
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
              name="Weight"
              onChangeText={(text) => setWeight(text)}
              value={weight}
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
          <View style={styles.content}>
            <Text style={[styles.text, styles.sumtotal]}>
              Total Amount : &#x20B5; {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Bottom */}
      <View
        style={{
          height: 30,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={styles.bottomContaner}>
          <TouchableOpacity style={styles.touch} onPress={handleAddBtn}>
            <Text style={[styles.txt, styles.add]}>ADD ITEM</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContaner}>
          <TouchableOpacity
            style={[styles.touch, styles.doneColor]}
            onPress={handleDone}
          >
            <Text style={styles.txt}>MY BASKET({cart})</Text>
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
    fontFamily: "Bitter",
    fontSize: 18,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.primary,
  },
  search: {
    width: 220,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginLeft: 10,
    padding: 5,
    fontSize: 15,
    textAlign: "center",
    borderRadius: 3,
    padding: 6,
  },
  searchBtn: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginLeft: 2,
  },
  textItem: {
    width: 80,
    height: 30,
    borderBottomWidth: 1,
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
    backgroundColor: "black",
  },
  add: {
    color: "white",
  },
  txt: {
    color: "orange",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
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
    marginVertical: 5,
    alignItems: "center",
    height: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modal: {
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  modal_header: {
    height: 50,
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modal_body: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  sumtotal: {
    borderBottomWidth: 2,
    // fontFamily:'Bitter'
  },
});
