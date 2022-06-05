import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../../consts/colors";
import axios from "axios";
import {
  addProfile,
  addProfileFailure,
  addProfileSuccess,
} from "../../redux/profilesRedux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
  baseURL: "http://153.92.210.61/api/",
});

export const New = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [region, setRegion] = useState("");
  const [contact, setContact] = useState("");
  const [fisherId, setFisherId] = useState(null);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser._id);

  useEffect(() => {
    genId();
  }, []);

  const genId = async () => {
    const val = Math.floor(1000 + Math.random() * 9000);
    setFisherId(val.toString());
  };
  //add profile
  const handleSubmit = async () => {
    let folk = {
      firstname,
      lastname,
      age,
      location,
      region,
      contact,
      fisherId,
      userId,
    };
    dispatch(addProfile());
    try {
      const res = await axiosInstance.post("profile/fisherman", folk, {
        headers: {
          token: "Bearer " + JSON.parse(await AsyncStorage.getItem("token")),
        },
      });
      dispatch(addProfileSuccess(res.data));
    } catch (err) {
      dispatch(addProfileFailure());
    }
    setFirstname(""),
      setAge(""),
      setContact(""),
      setLastname(""),
      setFisherId(null),
      setLocation("");
    setRegion("");
    // setTimeout(() => {
    //   navigation.navigate("Profile")
    // },2000)
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.txt}>First Name</Text>
            <TextInput
              style={styles.inputItems}
              multiline={false}
              value={firstname}
              onChangeText={(fname) => setFirstname(fname)}
            />
          </View>
          <View>
            <Text style={styles.txt}>Last Name</Text>
            <TextInput
              style={styles.inputItems}
              multiline={false}
              value={lastname}
              onChangeText={(lname) => setLastname(lname)}
            />
          </View>
          <View>
            <Text style={styles.txt}>Age</Text>
            <TextInput
              style={styles.inputItems}
              multiline={false}
              value={age}
              onChangeText={(age) => setAge(age)}
            />
          </View>
          <View>
            <Text style={styles.txt}>Contact</Text>
            <TextInput
              style={styles.inputItems}
              multiline={false}
              value={contact}
              onChangeText={(cont) => setContact(cont)}
            />
          </View>
          <View>
            <Text style={styles.txt}>Location</Text>
            <TextInput
              style={styles.inputItems}
              multiline={false}
              value={location}
              onChangeText={(loc) => setLocation(loc)}
            />
          </View>
          <View>
            <Text style={styles.txt}>Region</Text>
            <TextInput
              style={styles.inputItems}
              multiline={false}
              value={region}
              onChangeText={(reg) => setRegion(reg)}
            />
          </View>
          <View>
            <Text style={styles.txt}>ID</Text>
            <TextInput
              defaultValue={fisherId}
              editable={false}
              style={styles.inputItems}
              multiline={false}
              onFocus={() => genId()}
              onChangeText={(id) => setFisherId(id)}
            />
          </View>
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.update}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
  },
  inputItems: {
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    margin: 5,
    padding: 5,
    fontSize: 18,
  },
  submit: {
    width: 150,
    height: 40,
    backgroundColor: "green",
    margin: 10,
    paddingTop: 10,
    borderRadius: 3,
  },
  txt: {
    fontSize: 18,
    fontWeight: "bold",
  },
  update: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
