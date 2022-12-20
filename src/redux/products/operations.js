import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-od0o.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

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

export const sideBarInfo = createAsyncThunk(
  'diary/dayinfo',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/diary/dayinfo');
      token.unset();
     console.log(result.data)
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
