import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"

const BASE_URL = process.env.REACT_APP_API_URL


const TOKEN = async () => {
  JSON.parse(await AsyncStorage.getItem('token'))
}

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
 });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
