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
import { publicRequest } from "../requestMethods";
import { addToCart } from "./cartRedux";
import { getProducts, getProductsSuccess } from "./productsRedux";
import { getSource, getSourceFailure, getSourceSuccess } from "./sourceRedux";
import { fetchdata, fetchdataFailure, fetchdataSuccess } from "./fishRedux";
import { addOrder } from "./orderRedux";

//get Products
export const products = async (dispatch) => {
  dispatch(getProducts());
  try {
    const res = await publicRequest.get("product/");
    dispatch(getProductsSuccess(res.data))
  } catch (err) {
    dispatch(getProfileFailure())
  }
}

//get Source
export const Sources = async ( dispatch ) => {
  dispatch(getSource());
  try {
    const res = await publicRequest.get("source/")
    dispatch(getSourceSuccess(res.data))
  } catch (err) {
    dispatch(getSourceFailure())
  }
}

//get Fish and prices
export const Fishes = async (dispatch) => {
  dispatch(fetchdata());
  try {
    const res = await publicRequest.get("fish/")
    dispatch(fetchdataSuccess(res.data))
  } catch (err) {
    dispatch(fetchdataFailure())
  }
}

//log user in
// export const login = async (dispatch, user) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post("auth/login", user);
//     const value = JSON.stringify(res.data.accessToken);
//     await AsyncStorage.setItem("user", value);
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

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
export const addToProfile = async (dispatch, profile) => {
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
    const res = await publicRequest.put('profile/',folk)
    dispatch(updateProfileSuccess(res.data));
  } catch (err) {
    dispatch(updateProfileFailure());
  }
};
//delete profile
export const deleteProfile = async  (dispatch,id) =>{
  dispatch(deleteProfile());
  try {
    const res = await publicRequest.delete('profile/fisherman/${id}')
    dispatch(deleteProfileSuccess(id))
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

export const addToOrder = async (dispatch, order) => {
  try {
    const res = await publicRequest.post("order/", order)
    dispatch(addOrder(res.data))
  } catch (error) {
    
  }
}