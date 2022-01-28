import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const BASE_URL = 'http://localhost:4000/api/'

const Token = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    return jsonValue != null ? JSON.parse(jsonValue).accessToken : null;
  } catch (e) {
    console.log(e);
  }
  Token()
};

const TOKEN = ""
export const publicRequest = axios.create({
  baseURL: BASE_URL,
 });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
