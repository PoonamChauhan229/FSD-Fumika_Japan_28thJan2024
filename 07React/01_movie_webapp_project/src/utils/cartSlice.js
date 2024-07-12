import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[] // kept as a empty
    },
    reducers:{
        // actionItem : reduction function
        // actionItemName:()=>{}
        // cart > add to cart , remove from cart, clear the cart  >> Let work on this 
        addItem:(state,action)=>{
            //action.payload >> actual data
            //add something to empty array? >> push method
            state.items.push(action.payload)
            console.log(action.payload)
        },
        clearCart:(state,action)=>{
            // items =[]

        }    
    }


})
export const {addItem,removeItem}=cartSlice.actions
export default cartSlice.reducer