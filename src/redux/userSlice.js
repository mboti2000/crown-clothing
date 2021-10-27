import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.currentUser = action.payload
    },
    signOut: (state) => {
      state.currentUser = null;
    }
  },
})

export const { signIn, signOut} = userSlice.actions;

export default userSlice.reducer;