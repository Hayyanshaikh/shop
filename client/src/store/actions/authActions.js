import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URI = 'http://localhost:5000/api/auth';

const registerUser = createAsyncThunk('auth/register', async (userData) => {
  try {
    const response = await axios.post(`${BASE_URI}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const loginUser = createAsyncThunk('auth/login', async (userData) => {
  try {
    const response = await axios.post(`${BASE_URI}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export {registerUser, loginUser};