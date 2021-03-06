import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import COLORS from "../../consts/colors";

export const Chart = () => {
  const linedata = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: [600, 500, 200, 1000,0],
        strokeWidth: 3,
      },
    ],
  };
  return (
    <View style={{ flex: 4 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          fontFamily:'Bitter',
          color: COLORS.primary,
        }}
      >
        TRADE SUMMARY (GH&#x20B5;)
      </Text>
      <LineChart
        data={linedata}
        width={Dimensions.get("window").width}
        height={230}
        margin={10}
        yAxisLabel={""}
        chartConfig={{
          backgroundColor: COLORS.primary,
          backgroundGradientFrom: COLORS.primary,
          backgroundGradientTo: COLORS.gray,
          fontSize: 12,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={{
          flex: 4,
          margin: 8,
          borderRadius: 5,
        }}
      />
    </View>
  );
};
