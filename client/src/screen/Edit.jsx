import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../consts/colors";
import { updatedProfile } from "../redux/apiCalls";

export const Edit = ({ route, navigation }) => {
  const { _id } = route.params;
  const [firstname, setFirstname] = useState(route.params.firstname);
  const [lastname, setLastname] = useState(route.params.lastname)
  const [age, setAge] = useState(route.params.age)
  const [location, setLocation] = useState(route.params.location)
  const [region, setRegion] = useState(route.params.region)
  const [contact, setContact] = useState(route.params.contact)

  const dispatch = useDispatch();

  const profileId = useSelector((state) =>
    state.profile.folks.find((profile) => profile._id === _id)
  );

  const handleEdit = () => {
    const id = profileId._id
    const folk = {
      firstname,lastname,age,location,region,contact
    }
    updatedProfile(dispatch,{id, folk});
    console.log(folk);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          margin: 5,
          backgroundColor: COLORS.primary,
          borderRadius: 50,
          width: 35,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      </View>
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
          defaultValue={profileId.age}
          editable={true}
          multiline={false}
          onChangeText={(age) => setAge(age)}
        />
        <TextInput
          style={styles.inputItems}
          defaultValue={profileId.contact}
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
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Update
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
