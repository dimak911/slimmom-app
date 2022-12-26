import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://slim-mom-od0o.onrender.com/api';

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

export const fetchsideBarInfo = createAsyncThunk(
  'diary/dayinfo',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/diary/dayinfo');
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeDiaryListItem = createAsyncThunk(
  'products/removeItem',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/diary/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const {
      response: { status },
    } = error;

    if (status === 401) {
      const res = await axios.post('/auth/refreshToken', {
        withCredentials: true,
      });
      const token = res.data.result.token;

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      error.config.headers['Authorization'] = 'Bearer ' + token;
      error.config.baseURL = undefined;
      return axios.request(error.config);
    }

    return Promise.reject(error);
  }
);
