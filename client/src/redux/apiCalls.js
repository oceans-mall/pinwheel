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
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
  deleteProfileFailure,
  deleteProfileSuccess,
} from "./profilesRedux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { publicRequest } from "../requestMethods";
import { addToCart } from "./cartRedux";

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
    const res =await publicRequest.post("profile/fisherman", profile)
      dispatch(addProfileSuccess(res.data));
  } catch (err) {
    dispatch(addProfileFailure());
  }
};
//get profile
export const profileFolk = async (dispatch, id) => {
  dispatch(getProfileStart())
  try {
     const info = await publicRequest.get(`profile/folk/?${id}`)
      dispatch(getProfileSuccess(info.data))
  } catch (err) {
    dispatch(getProfileFailure())
  }
};
//edit profile
export const updatedProfile = async (dispatch, id, folk) => {
  dispatch(updateProfile());
  try {
    const res = await publicRequest.put(`profile/${id}`,folk)
    dispatch(updateProfileSuccess(res.data));
  } catch (err) {
    dispatch(updateProfileFailure());
  }
};
//delete profile
export const deleteProfile = async  (dispatch,id) =>{
  dispatch(deleteProfile());
  try {
    const res = await publicRequest.delete(`profile/fisherman/${id}`)
    dispatch(deleteProfileSuccess(res.data))
  } catch (err) {
    dispatch(deleteProfileFailure())
  }
}
//cart
export const addCart = async (dispatch, cart) =>{
  try {
    const res = await publicRequest.post("cart/", cart)
    dispatch(addToCart(res.data))
  } catch (error) {}
}