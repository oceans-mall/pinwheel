import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {
  registerSuccess,
  registerUser,
  registerFailure,
} from "./registerRedux";
import { profileUser, profileSuccess, profileFailure } from "./profileRedux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    const value = JSON.stringify(res.data);
    await AsyncStorage.setItem("user", value);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, register) => {
  dispatch(registerUser());
  try {
    const res = await publicRequest.post("auth/register", register);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

//CREATE PROFILE
export const profile = async (dispatch, profile) => {
  dispatch(profileUser());
  try {
    const res = await userRequest.post("profile/fisherman", profile);
    dispatch(profileSuccess(res.data));
  } catch (err) {
    dispatch(profileFailure());
  }
};
