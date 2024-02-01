import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../actions/authActions.js'

const initialState = {
  user: null,
  auth: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = false;
      state.user = null;
    },
  },
});

// Exporting synchronous actions
export const { logout } = AuthSlice.actions;

// Exporting the reducer
export default AuthSlice.reducer;