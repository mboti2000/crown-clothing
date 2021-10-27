import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from '../pages/shop/ShopData';

export const collectionSlice = createSlice({
  name: 'directory',
  initialState: {
    collections: SHOP_DATA
  },
  reducers: {
  },
})

export default collectionSlice.reducer;