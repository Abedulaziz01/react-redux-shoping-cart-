import { createSlice } from '@reduxjs/toolkit'
import cartItem from './cartItems'

const initialState = {
   
        cartItem:cartItem,
        amount:2,
        total:0,
        isloading :true,
      
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart:(state)=>{
      state.cartItem=[];
    },
    removeItem:(state,action)=>{
       const itemId = action.payload;
       state.cartItem =  state.cartItem.filter((item)=> item.id !== itemId)
    },
    increase :(state,{payload} )=>{
      const cart =  state.cartItem.find((item)=>item.id
      === payload.id )
      cart.amount = cart.amount+1;
    },
    Deacrease :(state,{payload} )=>{
      const cart =  state.cartItem.find((item)=>item.id
      === payload.id )
      cart.amount = cart.amount-1;
    },
    calculateTotal:(state)=>{
      let amount= 0;
      let total=0;
      state.cartItem.forEach((item)=>{
        amount += item.amount;
        total +=item.amount*item.price;
      });
      state.amount = amount;
      state.total= total;
    }

  }
});

export const {clearCart,removeItem, increase,Deacrease,calculateTotal} = cartSlice.actions
export default cartSlice.reducer