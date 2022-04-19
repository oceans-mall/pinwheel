import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

export const Notifications = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{marginHorizontal:10}}>
          <Text style={{fontSize:20, fontWeight:'600', fontStyle:'italic'}}>There are no notifications at this moment</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
