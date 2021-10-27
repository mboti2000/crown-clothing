import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    hidden: true,
    cartItems: []
  },
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addToCart: (state, action) =>{
        const existingCartItem = state.cartItems.find(item => item.id === action.payload.id);
        if(existingCartItem){
            state.cartItems = state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
        } else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
        }
    },
    removeFromCart: (state, action) =>{
      const newCartItems = state.cartItems;
      const itemToDelete = newCartItems.find(item => item.id === action.payload.id);
      const index = newCartItems.findIndex(item => item.id === itemToDelete?.id);
      newCartItems.splice(index,1);

      state.cartItems = [...newCartItems];
    },
    removeSingleFromCart: (state, action)=>{
      const cartItemToDecrease = state.cartItems.find(item => action.payload.id === item.id);
      state.cartItems = state.cartItems.map(item => item.id === cartItemToDecrease.id ? {...cartItemToDecrease, quantity: cartItemToDecrease.quantity - 1 } : item );
    } 
  },
})

export const { toggleCartHidden, addToCart, removeFromCart, removeSingleFromCart } = cartSlice.actions;

export default cartSlice.reducer;