import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { FlatButton } from "../general/Buttons";
import { useSelector } from "react-redux";

const folksSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number().required().min(2),
  contact: yup.number().required().min(10),
  location: yup.string().required(),
  region: yup.string().required(),
  fisherID: yup.string().required(),
});
export const Form = ({ addFisherman }) => {
  const [fisherId, setFisherId] = useState("");

  const userID = useSelector((state) => state.user.currentUser?._id);

  const genId = () => {
    const val = Math.floor(1000 + Math.random() * 9000);
    setFisherId("#" + val.toString());
  };

  console.log(fisherId);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Formik
          initialValues={{
            userId: userID,
            fisherID: fisherId,
            firstname: "",
            lastname: "",
            age: "",
            contact: "",
            location: "",
            region: "",
          }}
          validationSchema={folksSchema}
          onSubmit={(values, actions) => {
            addFisherman = { values };
            actions.resetForm();
            console.log({ values });
          }}
        >
          {(props) => (
            <View>
              <TextInput
                placeholder="UserId"
                onChangeText={props.handleChange("userId")}
                defaultValue={userID}
                value={props.values.userId}
                editable={false}
                style={style.input}
                onBlur={props.handleBlur("")}
              />
              <Text style={style.errorText}>
                {props.touched.userId && props.errors.userId}
              </Text>
              <TextInput
                placeholder="Firstname"
                onChangeText={props.handleChange("firstname")}
                value={props.values.firstname}
                style={style.input}
                onBlur={props.handleBlur("firstname")}
              />
              <Text style={style.errorText}>
                {props.touched.firstname && props.errors.firstname}
              </Text>
              <TextInput
                placeholder="Lastname"
                onChangeText={props.handleChange("lastname")}
                value={props.values.lastname}
                style={style.input}
                onBlur={props.handleBlur("lastname")}
              />
              <Text style={style.errorText}>
                {props.touched.lastname && props.errors.lastname}
              </Text>
              <TextInput
                placeholder="Age"
                onChangeText={props.handleChange("age")}
                value={props.values.age}
                style={style.input}
                keyboardType="number-pad"
                onBlur={props.handleBlur("age")}
              />
              <Text style={style.errorText}>
                {props.touched.age && props.errors.age}
              </Text>
              <TextInput
                placeholder="+233 111 111 000"
                onChangeText={props.handleChange("contact")}
                value={props.values.contact}
                style={style.input}
                keyboardType="number-pad"
                onBlur={props.handleBlur("contact")}
              />
              <Text style={style.errorText}>
                {props.touched.contact && props.errors.contact}
              </Text>
              <TextInput
                placeholder="Location"
                onChangeText={props.handleChange("location")}
                value={props.values.location}
                style={style.input}
                onBlur={props.handleBlur("location")}
              />
              <Text style={style.errorText}>
                {props.touched.location && props.errors.location}
              </Text>

              <TextInput
                placeholder="Region"
                onChangeText={props.handleChange("region")}
                value={props.values.region}
                style={style.input}
                onBlur={props.handleBlur("region")}
              />
              <Text style={style.errorText}>
                {props.touched.region && props.errors.region}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <TextInput
                    placeholder="ID Number"
                    onChangeText={props.handleChange("fisherID")}
                    defaultValue={fisherId}
                    editable={false}
                    style={style.input}
                    onBlur={props.handleBlur("fisherID")}
                  />
                  <Text style={style.errorText}>
                    {props.touched.fisherID && props.errors.fisherID}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={genId}
                  style={{
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 50,
                    borderRadius: 3,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Generate ID
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatButton text="submit" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 10,
    textAlign: "center",
  },
});
