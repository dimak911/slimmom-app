import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-od0o.onrender.com/api';

export const fetchDiaryProducts = createAsyncThunk(
  'products/fetchAll',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/diary/${date}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
