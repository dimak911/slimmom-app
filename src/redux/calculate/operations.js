import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://slim-mom-od0o.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:3001/api/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const calculation = createAsyncThunk(
  'calculate/calories',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('calculate/calories', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshCalories = createAsyncThunk(
  'calculate/refreshCalories',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    try {
      token.set(state.auth.token);
      const { data } = await axios.get('/calculate/calories');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
