
import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload);
        },
        removeFromWishlist:(state,action)=>{
            // return state.filter((item)=> item.id !== action.payload)
            const index = state.findIndex(item => item.id === action.payload);
            if(index !== - 1){
                state.splice(index,1)
            }
        },
    },
});

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;