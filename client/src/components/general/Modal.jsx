import React from "react";
import { Modal, View, Text, ActivityIndicator } from "react-native";
import COLORS from "../../consts/colors";

export const Indicator = ({ show }) => {
  return (
    <Modal transparent visible={show} animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor:'#00000099',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            animating={true}
          />
        </Text>
      </View>
    </Modal>
  );
};
