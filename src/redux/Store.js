
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/Slices/CartSlice";
import wishlistReducer from '../redux/Slices/wishlistSlice';

export const store =configureStore({
    reducer:{
        //use Reducer property here instead of cartslice
        cart : cartReducer,
        wishlist : wishlistReducer,
    },
})