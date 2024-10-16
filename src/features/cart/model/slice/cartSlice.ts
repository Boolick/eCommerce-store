import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from '../types/cartState';

const initialState: CartState = {
  cartId: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartId: (state, action: PayloadAction<string | null>) => {
      state.cartId = action.payload;
    },
  },
});

export const {setCartId} = cartSlice.actions;
export default cartSlice.reducer;
