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
} from "react-native";
import COLORS from "../../consts/colors";
import { Form } from "./Form";
import { profileFolk, addToProfile } from "../../redux/apiCalls";

export const Profile = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  //fetching data from the api
  useEffect(() => {
    profileFolk(dispatch);
    folk;
  }, [dispatch]);

  //fetching data from redux
  const getProfile = useSelector((state) => state.profile);
  const agent_id = useSelector((state) => state.user.currentUser?._id);

  //search function
  const search = (data) =>
    data.filter((item) => item.fisherID.toString().includes(query));

  //adding info to database
  const addToFisherman = (details) => {
    addToProfile(dispatch, {
      ...details,
    });
    setModalOpen(false);
  };

  const folk = getProfile.folks.map((item, i) =>
    item.userId === agent_id ? (
      <FlatList
        data={search([item])}
        renderItem={({ item }) => <Card items={item} />}
      />
    ) : (
      <Text></Text>
    )
  );

  const Card = ({ items }) => {
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Edit", items)}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{items.firstname}</Text>
            <Text style={[styles.name, styles.lname]}>{items.lastname}</Text>
          </View>
          <Text style={styles.details}>Contact : 0{items.contact}</Text>
          <Text style={styles.details}>ID : {items.fisherID}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Location: {items.location}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 4,
          padding: 10,
          paddingTop: 20,
          backgroundColor: "#f7f5f0",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.primary,
            fontSize: 15,
            margin: 5,
            fontWeight: "600",
          }}
        >
          REGISTERED FISHER FOLKS
        </Text>
        <TextInput
          onChangeText={(text) => setQuery(text)}
          style={{
            padding: 7,
            marginVertical: 10,
            fontSize: 18,
            borderColor: COLORS.primary,
            borderWidth: 1,
            borderRadius: 5,
          }}
          placeholder="Enter fisherman ID"
        />
        {getProfile.isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          folk
        )}
        <Modal visible={modalOpen} hardwareAccelerated animationType="fade">
          <TouchableOpacity onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View style={styles.modalContainer}>
                <Ionicons
                  onPress={() => setModalOpen(false)}
                  name="close"
                  size={24}
                  style={styles.toggleModal}
                />
              </View>
              <Form addFisherman={addToFisherman} />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      <View style={styles.modalContainer}>
        <Ionicons
          onPress={() => setModalOpen(true)}
          name="add-outline"
          size={24}
          style={styles.toggleModal}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    textAlign: "center",
    margin: 3,
  },
  border: { borderWidth: 2, borderColor: "#c8e1ff" },
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 60,
    height: 40,
    backgroundColor: COLORS.primary,
    elevation: 8,
    borderRadius: 50,
    marginTop: 10,
  },
  toggleModal: { color: "white", fontWeight: "800" },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
  },
  lname: {
    marginLeft: 3,
  },
  details: {
    marginTop: 2,
    fontSize: 20,
    color: "white",
  },
});
