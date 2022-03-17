import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/colors";
import { useDispatch, useSelector } from "react-redux";
import { Fishes, Sources } from "../../redux/apiCalls";
import { addOrder } from "../../redux/orderRedux";

export const Sell = ({ navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const [sourcetype, setSource] = useState("--source--");
  const [selectedFish, setSelectedFish] = useState("--select--");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [fisherman, setFisherman] = useState("");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const folk = useSelector((state) => state.profile?.folks);
  const sources = useSelector((state) => state.source?.sources);
  const fishes = useSelector((state) => state.fish?.fish);
  const cart = useSelector((state) => state.order.quantity);

  //24578942
  useEffect(() => {
    Sources(dispatch);
    Fishes(dispatch);
    getPrice();
  }, [dispatch, selectedFish]);

  const name = () => {
    const person = folk.filter((item) =>
      item.contact.toString().includes(query)
    );
    person.forEach((element) => {
      setFisherman(element.firstname) || setLocation(element.location);
    });
    //: setFisherman("sorry name does not exist");
  };

  const fish = fishes.map((fish, i) => (
    <Picker.Item
      key={i}
      label={fish.name}
      value={fish.name.toLowerCase()}
      color={COLORS.primary}
      style={styles.picker}
    />
  ));

  const m = sources.map((el) =>
    el.source.map((item, i) => (
      <Picker.Item
        key={i}
        label={item}
        value={item.toLowerCase()}
        color={COLORS.primary}
        style={styles.picker}
      />
    ))
  );

  //get selected item price
  const getPrice = () =>
    fishes.map((item) =>
      item.name === selectedFish ? setPrice(item.price) : null
    );
  //handle add to basket
  const handleAddBtn = () => {
    setQuantity(quantity + 1);
    weight === 0
      ? "Please add quantity"
      : dispatch(addOrder({ selectedFish, weight, price }));
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
            backgroundColor: COLORS.primary,
          }}
        >
          {/* back navigator icon */}
          <View
            style={{
              alignItems: "center",
              backgroundColor: COLORS.white,
              borderRadius: 50,
              padding: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={20}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: COLORS.white,
                borderRadius: 50,
                padding: 10,
                position: "relative",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("TradeCart")}>
                <Ionicons
                  name="basket-outline"
                  size={20}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  right: 5,
                  backgroundColor: "red",
                  borderRadius: 50,
                  padding: 1,
                  width: 17,
                  alignItems: "center",
                }}
              >
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
        </View>
        {/* Details container */}
        <View style={{ flex: 1 }}>
          <View style={styles.sell_info}>
            <View style={{ flexDirection: "row" }}>
              {/* search box */}

              <TextInput
                placeholder="Enter phone number"
                onChangeText={(text) => setQuery(text)}
                placeholderTextColor={COLORS.secondary}
                style={styles.sell_input}
                underlineColorAndroid="transparent"
              />
              <Button title="Search" onPress={query ? name : null} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Name:</Text>
              <Text style={styles.titleText}>{fisherman}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Fish-Type:</Text>
              <Picker
                selectedFish={selectedFish}
                onValueChange={(value) => setSelectedFish(value)}
                style={styles.pickerContainer}
                dropdownIconColor={COLORS.primary}
              >
                {fish}
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Source:</Text>
              <Picker
                sourcetype={sourcetype}
                onValueChange={(value) => setSource(value)}
                style={styles.pickerContainer}
                dropdownIconColor={COLORS.primary}
              >
                {m}
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Location:</Text>
              <Text style={styles.titleText}>{location}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Weight: </Text>
              <TextInput
                placeholder="Enter"
                name="Weight"
                onChangeText={(text) => setWeight(text)}
                placeholderTextColor={COLORS.secondary}
                style={styles.textItem}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Price(/kg): &#x20B5; </Text>
              <Text style={styles.textItem}> {price}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                height: 60,
                backgroundColor: COLORS.secondary,
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <TouchableOpacity onPress={handleAddBtn}>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.white,
                    fontWeight: "500",
                  }}
                >
                  Add to Basket
                </Text>
              </TouchableOpacity>
            </View>
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
  text: {
    fontSize: 20,
  },
  titleText: { fontSize: 20, fontWeight: "bold", marginLeft: 8 },
  sell_info: {
    flex: 1,
    justifyContent: "space-evenly",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sell_input: {
    borderWidth: 0.5,
    marginLeft: 10,
    padding: 5,
    fontSize: 18,
    color: COLORS.primary,
  },
  textItem: {
    width: 70,
    height: 30,
    borderWidth: 0.5,
    alignItems: "center",
    paddingLeft: 3,
    fontSize: 20,
  },
  picker: {
    fontSize: 15,
    textAlign: "center",
  },
  pickerContainer: { width: "45%", marginLeft: 10, fontSize: 15, height: 40 },
});
