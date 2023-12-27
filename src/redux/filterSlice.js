import { createSlice } from '@reduxjs/toolkit';
const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setSearchFilterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setSearchFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
