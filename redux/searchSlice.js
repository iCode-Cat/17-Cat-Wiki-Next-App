import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popup: false,
};

export const searchSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    popupToggle: (state) => {
      state.popup = !state.popup;
    },
  },
});

export const { popupToggle } = searchSlice.actions;
export default searchSlice.reducer;
