import React from "react";
import { Dimensions, FlatList, StyleSheet, View, Text } from "react-native";
import COLORS from "../../consts/colors";
import fish from "../../consts/fish";

const width = Dimensions.get("screen").width / 2 - 30;

export const Card = () => {
  const Item = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        numColumns={2}
        data={fish}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLORS.light_gray,
    marginHorizontal: 2,
    width,
    borderRadius: 10,
    marginBottom: 20,
    padding: 2,
  },
});
