import { createSlice } from '@reduxjs/toolkit';
import users from '../../json_files/users.json'

const initialState = {
  user: null,
  auth: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = true
      state.user = action.payload
    },

    signup: (state, action) => {
      users.push(action.payload)
      state.auth = true
      state.user = action.payload
    },

    logout: (state) => {
      state.auth = false
      state.user = null
    }
  },
});

export const { login, signup, logout } = AuthSlice.actions;

export default AuthSlice.reducer;