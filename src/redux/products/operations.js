import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const postSideBarInfo = createAsyncThunk(
  'diary/postInfo',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post('/diary/dayinfo', data);
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

export const addDiaryListItem = createAsyncThunk(
  'products/addItem',
  async (product, { rejectWithValue }) => {
    try {
      const result = await axios.post(`/diary/${product.date}`, { ...product });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
