import { createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[],
        isFetching: false,
        error: false
    },

    reducers:{
        getProducts:(state, action) => {
            state.isFetching = true,
            state.error = false
        },
        getProductsSuccess: (state, action) => {
            state.isFetching = false,
            state.products = action.payload
        },
        getProductFailure:(state, action) => {
            state.error = true
        }
    }
})

export const {
    getProducts,
    getProductsSuccess,
    getProductFailure
} = productSlice.actions;

export default productSlice.reducer