import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import COLORS from "../../consts/colors";
import fish from "../../consts/fish";

export const OrderHistory = ({ navigation }) => {
  return (
    <SafeAreaView style={style.conctainer}>
      <View style={style.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={25} />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", color: COLORS.primary }}
        >
          Orders History
        </Text>
        <View></View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
        {fish.map((fish) => (
          <View style={style.card} key={fish.id}>
            <Image
              source={fish.img}
              style={{ width: 80, height: 80, borderRadius: 50 }}
            />
            <View>
              <Text>{fish.name}</Text>
              <Text>{fish.price}</Text>
            </View>
            <View>
                <Text>{fish.date}</Text>
              <Text>REORDER</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  conctainer: {
    flex: 1,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  card: {
    height: 100,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 15,
  },
});
