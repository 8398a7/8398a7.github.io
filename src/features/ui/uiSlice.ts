import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  openNavbar: boolean;
}

const initialState: UIState = {
  openNavbar: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.openNavbar = !state.openNavbar;
    },
    setNavbarOpen: (state, action: PayloadAction<boolean>) => {
      state.openNavbar = action.payload;
    },
  },
});

export const { toggleNavbar, setNavbarOpen } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
export default uiSlice;
