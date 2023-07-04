
import {createSlice} from "@reduxjs/toolkit"



export const cartSlice = createSlice({
    name:'cart',
     initialState:[],
    reducers:{
        add : (state,action)=>{
            state.push(action.payload);
        },
        remove : (state,action)=>{
            const productId = action.payload;
          return state.filter((item) => item.id !== productId);// Use `return` statement and filter the state array directly instead of state.item.
        },
        },
    },
);

export const {add,remove} = cartSlice.actions;

export default cartSlice.reducer;