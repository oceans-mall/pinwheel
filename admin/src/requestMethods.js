import axios from "axios";

const BASE_URL = "http://153.92.210.61/api";

// const TOKEN =
// console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token:
      "Bearer " +
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser?.accessToken,
  },
});
