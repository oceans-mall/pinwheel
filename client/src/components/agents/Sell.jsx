import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/colors";
import { fish, source } from "../../consts/dummyData";
import { useSelector } from "react-redux";

export const Sell = ({ navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const [sourcetype, setSource] = useState("--source--");
  const [selectedValue, setSelectedValue] = useState("--select--");
  const [filter, setFilters] = useState({});
  
  console.log(sourcetype, selectedValue);

  const { folks, location } = useSelector((state) => state.profile);
  console.log(folks, location);
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
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
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
                  {quantity}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Details container */}
        <View style={{ flex: 1 }}>
          <View style={styles.sell_info}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Name:</Text>
              <Text
                style={{
                  fontSize: 25,
                  color: COLORS.secondary,
                  textAlign: "center",
                }}
              >
                Fisehrman name
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Fish-Type:</Text>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={{ width: "45%", marginLeft: 10 }}
                dropdownIconColor={COLORS.primary}
              >
                {fish.length > 0 &&
                  fish.map((item, i) => (
                    <Picker.Item
                      key={i}
                      label={item}
                      value={item.toLowerCase()}
                      color={COLORS.primary}
                      style={{ fontSize: 18, textAlign: "center" }}
                    />
                  ))}
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Source:</Text>
              <Picker
                sourcetype={sourcetype}
                onValueChange={(itemValue) => setSource(itemValue)}
                style={{ width: "45%", marginLeft: 10 }}
                dropdownIconColor={COLORS.primary}
              >
                {source.length > 0 &&
                  source.map((item, i) => (
                    <Picker.Item
                      key={i}
                      label={item}
                      value={item.toLowerCase()}
                      color={COLORS.primary}
                      style={{ fontSize: 18, textAlign: "center" }}
                    />
                  ))}
              </Picker>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Location:</Text>
              <Text>Keta</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Weight:</Text>
              <TextInput
                placeholder="enter quantity"
                name="quantity"
                onChangeText={(text) => setSellQuantity(text)}
                placeholderTextColor={COLORS.secondary}
                style={styles.sell_input}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Price(/kg):</Text>
              <Text style={styles.sell_input}>&#x20B5; 20</Text>
            </View>
            <Text style={styles.text}>Total Amount:</Text>
            <View
              style={{
                alignItems: "center",
                height: 60,
                backgroundColor: COLORS.secondary,
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.white,
                    fontWeight: "bold",
                  }}
                >
                  ADD TO BASKET
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
});
