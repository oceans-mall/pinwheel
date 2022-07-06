import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import COLORS from "../../consts/colors";
import { profileFolk } from "../../redux/apiCalls";
import { New } from "./New";
import { Indicator } from "../general/Modal";

export const Profile = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    profileFolk(dispatch);
  }, []);

  //fetching data from redux
  const getProfile = useSelector((state) => state.profile?.folks);
  const agent_id = useSelector((state) => state.user.currentUser?._id);

  //search function
  const search = (data) =>
    data.filter((item) => item.fisherId.toString().includes(query));

  const folk = getProfile.map((item, i) =>
    item.userId === agent_id ? (
      <FlatList
        data={search([item])}
        renderItem={({ item }) => <Card items={item} />}
        keyExtractor={(item) => item._id}
        key={i}
      />
    ) : null
  );

  const Card = ({ items }) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate("Edit", items)}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.details,styles.id]}>ID#: {items.fisherId}</Text>
            <Text style={styles.name}>
              Name: {items.firstname + " " + items.lastname}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.details}>Phone: {items.contact}</Text>
            <Text
              style={{
                fontSize: 14,
                color: "#422b1a",
                marginHorizontal: 20,
                fontFamily: "Bitter",
              }}
            >
              Location: {items.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
        }}
      >
        <TextInput
          onChangeText={(text) => setQuery(text)}
          style={{
            padding: 10,
            marginVertical: 10,
            fontSize: 15,
            borderColor: COLORS.primary,
            borderWidth: 0.5,
            borderRadius: 5,
          }}
          placeholder="Enter fisherman ID"
        />
        <Text
          style={{
            textAlign: "center",
            color: COLORS.primary,
            fontSize: 16,
            margin: 5,
            fontFamily: "Bitter",
            borderBottomWidth: 0.3,
            padding: 5,
          }}
        >
          REGISTERED FISHER FOLKS
        </Text>
      </View>
      <ScrollView>{getProfile.isLoading ? <Indicator /> : folk}</ScrollView>
      <Modal visible={modalOpen} hardwareAccelerated animationType="fade">
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity
            onPress={() => setModalOpen(false)}
            style={styles.modalContainer}
          >
            <Ionicons name="close" size={30} style={styles.toggleModal} />
          </TouchableOpacity>
          <New />
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={styles.modalContainer}
      >
        <Ionicons name="add-outline" size={30} style={styles.toggleModal} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 50,
    height: 50,
    elevation: 5,
    borderRadius: 50,
    marginBottom: 5,
  },
  cardContainer: {
    flexDirection: "column",
    borderRadius: 5,
    padding: 10,
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "flex-start",
  },
  name: {
    fontSize: 13,
    textTransform: "capitalize",
    marginHorizontal: 10,
    fontFamily: "Bitter",
  },
  lname: {
    marginLeft: 3,
  },
  details: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: "Bitter",
  },
  id:{
    color: "purple",
    fontWeight: "600"
  },
  toggleModal: {
    color: "white",
    fontWeight: "800",
    backgroundColor: COLORS.primary,
    borderRadius: 50,
  },
});
