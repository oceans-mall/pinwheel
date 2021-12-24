import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://localhost:4000/api/";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    console.log(JSON.parse(jsonValue).accessToken);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
// console.log(`this is from ${getData().then(data => data.accessToken)}`);

const TOKEN = "12345"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
