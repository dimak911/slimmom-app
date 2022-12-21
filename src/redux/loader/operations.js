import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://slim-mom-od0o.onrender.com/api';

export const showLoading = createAsyncThunk(
  'loading/showLoading',
  async function () {
    const request = await fetch(baseUrl);
  
    return request;
  }
)