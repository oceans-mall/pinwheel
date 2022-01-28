import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { FlatButton } from "../general/Buttons";
import { ScrollView } from "react-native-gesture-handler";

const folksSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number().required().min(2),
  phone: yup.number().required().min(10),
  location: yup.string().required(),
  region: yup.string().required(),
});
export const Form = ({ addFisherman }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            age: "",
            phone: "",
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
                onChangeText={props.handleChange("phone")}
                value={props.values.phone}
                style={style.input}
                keyboardType="number-pad"
                onBlur={props.handleBlur("phone")}
              />
              <Text style={style.errorText}>
                {props.touched.phone && props.errors.phone}
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
