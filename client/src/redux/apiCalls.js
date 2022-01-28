import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {
  registerSuccess,
  registerUser,
  registerFailure,
} from "./registerRedux";
import {
  addProfile,
  addProfileSuccess,
  addProfileFailure,
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  updatedProfile,
  updateProfileSuccess,
  updateProfileFailure,
} from "./profilesRedux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { publicRequest } from "../requestMethods";

//log user in
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    const value = JSON.stringify(res.data.accessToken);
    await AsyncStorage.setItem("user", value);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//register user
export const register = async (dispatch, register) => {
  dispatch(registerUser());
  try {
    const res = await publicRequest.post("auth/register", register);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

//create profile
export const profile = async (dispatch, profile) => {
  dispatch(addProfile());
  try {
    await publicRequest
      .post("profile/fisherman", profile)
      .then((res) => dispatch(addProfileSuccess(res.data)));
  } catch (err) {
    dispatch(addProfileFailure());
  }
};
//get profile
export const profileFolk = async (dispatch, id) => {
  dispatch(getProfileStart())
  try {
     const info = await publicRequest.get("profile/folk/?:id",id)
      dispatch(getProfileSuccess(info.data))
  } catch (err) {
    dispatch(getProfileFailure())
  }
};
//edit profile
export const updateProfile = async (dispatch, id, folk) => {
  dispatch(updatedProfile());
  try {
    dispatch(updateProfileSuccess({ id, folk }));
  } catch (err) {
    dispatch(updateProfileFailure());
  }
};
