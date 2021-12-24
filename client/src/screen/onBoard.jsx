import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import COLORS from "../consts/colors";
import raw2 from "../assets/raw2.jpg";
import { PrimaryButton } from "../components/general/Buttons";

export const OnBoard = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        {/* <Image
          source={raw2}
          style={{
            flex: 0.5,
            alignSelf: "center",
            width: "100%",
            resizeMode: "cover",
          }}
        /> */}
      <View style={styles.textContainer}>
      <View style={{padding:5}}>
        <Text style={styles.onBoardText}>Welcome Buddy</Text>
        <Text  style={styles.onBoardParText}>
            We offer you the best of fresh sea food from Ghana's finest fisher-folks
        </Text>
      </View>
      <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
      </View>
      <PrimaryButton onPress={() => navigation.navigate("Services")} title= "GET STARTED"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textContainer:{
        flex: 0.5,
        paddingHorizontal:15,
        justifyContent: 'space-between'
    },
  onBoardText: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    color: COLORS.primary,
  },
  onBoardParText:{
      marginTop: 20,
      fontSize: 15,
      textAlign: 'center',
      color: COLORS.light_gray
  },
  indicatorContainer:{
      height: 50,
      flex: 1,
      justifyContent: "center",
      flexDirection: 'row',
      alignItems: "center"
  },
  currentIndicator:{
      height: 12,
      width: 30,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      marginHorizontal: 5
  },
  indicator: {
      backgroundColor: COLORS.primary,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginHorizontal: 5
  }
});
