import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/calculate/calories');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
