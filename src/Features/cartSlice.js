import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    cartItems:[],
    total:0,
}


const cartSlice=createSlice({
      name:'cart',
      initialState,

      reducers:{
        addToCart:(state,action)=>{
            
            const item = action.payload;

        const existingItem= state.cartItems.some((item)=>item.id ==action.payload.id)
        if(existingItem)
        {
            return state;
        }
        state.cartItems.push({...item,quantity:1})
            state.total+=item.price
        
            

        },

        removeFromCart:(state,action)=>{
            const id=action.payload;
            const item=state.cartItems.find((item)=>item.id == id)
            if(item)
            {
                state.total-=item.price*item.quantity
                // we have to remove the contribution of each item from the total price.
                state.cartItems=state.cartItems.filter((item)=>item.id !==action.payload)
            }
              
        },
        cartIncrement:(state,action)=>{
            
            const item=state.cartItems.find((item)=>item.id ==action.payload)
            if(item)
            {
                item.quantity+=1;
                state.total+=item.price

            }
            
        },
        cartDecrement:(state,action)=>{
            const id=action.payload;
            const item=state.cartItems.find((item)=>item.id == id)
            if(item && item.quantity >1)
            {
                item.quantity-=1;
                state.total-=item.price
            }
        }
      }

})

export const{addToCart,removeFromCart,cartIncrement,cartDecrement}=cartSlice.actions;
export default cartSlice.reducer
