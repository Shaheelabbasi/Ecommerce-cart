import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react'


const initialState={
    items:[]
}


const productSlice=createSlice({

    name:"products",
    initialState,
    reducers:{
   
        setProducts:(state,action)=>{
 

            state.items=action.payload
        },
        
        searchProducts:(state,action)=>{
           const title=action.payload;
           state.items=state.items.filter((item)=>item.title == title)
           console.log("the searched products are :",state.items)
        }


    }


})

export const{setProducts,searchProducts}=productSlice.actions;

export default productSlice.reducer;