import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  popup: false,
  cats: null,
};

export const fetchCatList = createAsyncThunk('/api/cats', async () => {
  const response = await axios.get('http://localhost:3001/api/cats');
  return response.data;
});

export const searchSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    popupToggle: (state) => {
      state.popup = !state.popup;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCatList.fulfilled, (state, action) => {
      state.cats = action.payload;
    });
  },
});

export const { popupToggle } = searchSlice.actions;
export default searchSlice.reducer;
