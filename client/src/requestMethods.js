import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://localhost:4000/api/";

const Token = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    // console.log(JSON.parse(jsonValue).accessToken);
    return jsonValue != null ? JSON.parse(jsonValue).accessToken : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

const TOKEN = "123"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
 });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// axios.defaults.baseURL = "http://localhost:4000/api/"

// export const usersRequest = axios.create()

// usersRequest.interceptors.request.use(
//   async config => {
//     const user = await AsyncStorage.getItem('user')
//     const token = JSON.parse(user).accessToken
//     console.log(token)
//     if(token){
//       config.headers.Authorization = 'Bearer ' +token
//       console.log(config.
//         headers.Authorization);
//     }
//     return config
//   },
//   error => Promise.reject(error)
// )