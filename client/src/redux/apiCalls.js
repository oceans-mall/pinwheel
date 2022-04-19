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
import { publicRequest } from "../requestMethods";
import { addToCart } from "./cartRedux";
import { getProducts, getProductsSuccess } from "./productsRedux";
import { getSource, getSourceFailure, getSourceSuccess } from "./sourceRedux";
import { fetchdata, fetchdataFailure, fetchdataSuccess } from "./fishRedux";
import { addToHistory, addToSummary } from "./orderSummary";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://153.92.210.61/api/'
 });

 const userRequest = async () => {
   axio
 }

//get Products
export const products = async (dispatch) => {
  dispatch(getProducts());
  try {
    const res = await axiosInstance.get("product/");
    dispatch(getProductsSuccess(res.data))
  } catch (err) {
    dispatch(getProfileFailure())
  }
}

//get Source
export const Sources = async ( dispatch ) => {
  dispatch(getSource());
  try {
    const res = await axiosInstance.get("source/")
    dispatch(getSourceSuccess(res.data))
  } catch (err) {
    dispatch(getSourceFailure())
  }
}

//get Fish and prices
export const Fishes = async (dispatch) => {
  dispatch(fetchdata());
  try {
    const res = await axiosInstance.get("fish/")
    dispatch(fetchdataSuccess(res.data))
  } catch (err) {
    dispatch(fetchdataFailure())
  }
}

//register user
export const register = async (dispatch, register) => {
  dispatch(registerUser());
  try {
    const res = await axiosInstance.post("auth/register", register);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

//create profile
export const addToProfile = async (dispatch, profile) => {
  dispatch(addProfile());
  try {
    const res =await axiosInstance.post("profile/fisherman", profile)
      dispatch(addProfileSuccess(res.data));
  } catch (err) {
    dispatch(addProfileFailure());
  }
};
//get profile
export const profileFolk = async (dispatch) => {
  dispatch(getProfileStart())
  try {
     const info = await axiosInstance.get('profile/folk/',{
       headers:{
         token:
         "Bearer "+JSON.parse(await AsyncStorage.getItem("token"))
       }
     })
      dispatch(getProfileSuccess(info.data))
  } catch (err) {
    dispatch(getProfileFailure())
  }
};
//edit profile
export const updatedProfile = async (dispatch, id, folk) => {
  dispatch(updateProfile());
  try {
    const res = await axiosInstance.put(`profile/${id}`,folk)
    dispatch(updateProfileSuccess(res.data));
  } catch (err) {
    dispatch(updateProfileFailure());
  }
};
//delete profile
export const deleteProfile = async  (dispatch,id) =>{
  dispatch(deleteProfile());
  try {
    const res = await axiosInstance.delete(`profile/fisherman/${id}`,{
      headers:{
        token:
        "Bearer "+JSON.parse(await AsyncStorage.getItem("token"))
      }
    })
    dispatch(deleteProfileSuccess(res.data))
  } catch (err) {
    dispatch(deleteProfileFailure())
  }
}
//cart
export const addCart = async (dispatch, cart) =>{
  try {
    const res = await axiosInstance.post("cart/", cart)
    dispatch(addToCart(res.data))
  } catch (error) {}
}

export const addToOrder = async (dispatch, order) => {
  try {
    const res = await axiosInstance.post("orders/order", order)
    dispatch(addToSummary(res.data))
  } catch (error) {
    
  }
}