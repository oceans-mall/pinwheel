import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { registerSuccess, registerUser, registerFailure } from "./registerRedux";
import { profileUser, profileSuccess, profileFailure } from "./profileRedux";

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post(`/auth/login`, user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, register) => {
    dispatch(registerUser());
    try {
        const res = await axiosInstance.post("auth/register", register)
        dispatch(registerSuccess(res.data))
    } catch (err) {
        dispatch(registerFailure())
    }
}

//CREATE PROFILE
export const profile = async (dispatch, profile) => {
    dispatch(profileUser());
    try {
        const res = await axiosInstance.post("profile/fisherman", profile)
        dispatch(profileSuccess(res.data))
    } catch (err) {
        dispatch(profileFailure())
    }
} 