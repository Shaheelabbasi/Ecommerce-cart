import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../Features/Productslice'
import cartReducers from '../Features/cartSlice'

const store=configureStore({
    reducer:{
        products:productReducers,
        cart:cartReducers
    }
})
export default store