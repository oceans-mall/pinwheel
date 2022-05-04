import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../consts/colors";
import { profileFolk } from "../redux/apiCalls";
import {
  updateProfile,
  updateProfileFailure,
  updateProfileSuccess,
} from "../redux/profilesRedux";

const axiosInstance = axios.create({
  baseURL: "http://153.92.210.61/api/",
});

export const Edit = ({ route, navigation }) => {
  const { _id } = route.params;
  const [firstname, setFirstname] = useState(route.params.firstname);
  const [lastname, setLastname] = useState(route.params.lastname);
  const [age, setAge] = useState(route.params.age);
  const [location, setLocation] = useState(route.params.location);
  const [region, setRegion] = useState(route.params.region);
  const [contact, setContact] = useState(route.params.contact);
  const [indicator, setIndicator] = useState(false);
  const dispatch = useDispatch();

  const profileId = useSelector((state) =>
    state.profile.folks.find((item) => item._id === _id)
  );

  const id = profileId?._id.toString();

  const handleEdit = async () => {
    let folk = {
      firstname,
      lastname,
      age,
      location,
      region,
      contact,
    };

    dispatch(updateProfile());
    try {
      const res = await axiosInstance.put(`profile/${id}`, folk, {
        headers: {
          token: "Bearer " + JSON.parse(await AsyncStorage.getItem("token")),
        },
      });
      dispatch(updateProfileSuccess(res.data));
      setIndicator(true);
    } catch (err) {
      dispatch(updateProfileFailure());
    }
    setTimeout(() => {
      profileFolk(dispatch);
      navigation.navigate("Profile");
      setIndicator(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          margin: 5,
          padding: 5,
          backgroundColor: COLORS.primary,
          borderRadius: 50,
          width: 35,
          height: 35,
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <Text style={{ fontSize: 20, margin: 10, color: COLORS.primary }}>
          UPDATE RECORDS
        </Text>
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.firstname}
          editable={true}
          multiline={false}
          onChangeText={(fname) => setFirstname(fname)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.lastname}
          editable={true}
          multiline={false}
          onChangeText={(lname) => setLastname(lname)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.age.toString()}
          editable={true}
          multiline={false}
          onChangeText={(age) => setAge(age)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.contact.toString()}
          editable={true}
          multiline={false}
          onChangeText={(cont) => setContact(cont)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.location}
          editable={true}
          mul
          tiline={false}
          onChangeText={(loc) => setLocation(loc)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.region}
          editable={true}
          multiline={false}
          onChangeText={(reg) => setRegion(reg)}
        />
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            backgroundColor: "green",
            margin: 10,
            paddingTop: 10,
            borderRadius: 3,
          }}
          onPress={handleEdit}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Update
            {indicator && (
              <ActivityIndicator
                size="small"
                color={COLORS.primary}
                style={{ alignSelf: "flex-end", marginLeft: 5 }}
              />
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputItems: {
    width: 200,
    height: 50,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    margin: 5,
    padding: 5,
    fontSize: 18,
  },
});
