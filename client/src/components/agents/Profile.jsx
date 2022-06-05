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
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}} >
          <Text style={styles.details}>ID#: {items.fisherId}</Text>
          <Text style={styles.name}>
            Name: {items.firstname + " " + items.lastname}
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.details}>Phone: {items.contact}</Text>
          <Text style={{ fontSize: 16,color:"#422b1a", fontWeight: "bold",marginHorizontal:20 }}>
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
      </View>
      <ScrollView>
        {getProfile.isLoading ? (
         <Indicator />
        ) : (
          folk
        )}
      </ScrollView>
      <Modal visible={modalOpen} hardwareAccelerated animationType="fade">
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <View style={{ marginTop: 5 }}>
            <View style={styles.modalContainer}>
              <Ionicons
                onPress={() => setModalOpen(false)}
                name="close"
                size={24}
                style={styles.toggleModal}
              />
            </View>
          </View>
        </TouchableOpacity>
        <New />
      </Modal>
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
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    elevation: 5,
    borderRadius: 50,
    marginBottom: 5,
  },
  cardContainer: {
    flexDirection: "column",
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "flex-start",
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
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
    marginHorizontal:10
  },
  lname: {
    marginLeft: 3,
  },
  details: {
    marginTop: 2,
    fontSize: 16,
    color: "white",
  },
  toggleModal: {
    color: "white",
    fontWeight: "800",
  },
});
