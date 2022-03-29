import {loginStart, loginSuccess, loginFailure} from "./userRedux";
import { publicRequest } from '../requestMethods'
import { getProductsStart, getProductsSuccess,getProductsFailure } from "./productRedux"


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductsStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductsSuccess(res.data))
    } catch (error) {
        dispatch(getProductsFailure(error))
    }
}