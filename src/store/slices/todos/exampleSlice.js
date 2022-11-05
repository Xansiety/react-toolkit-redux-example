import { createSlice } from '@reduxjs/toolkit';

export const templateSlice = createSlice({
  name: 'name', 
  initialState: { 
    counter: 10
  },
  reducers: {
    increment: (state, /* action */ ) => {
      //! https://react-redux.js.org/tutorials/quick-start
      // Redux Toolkit allows us to write 'mutating' logic in reducers. It
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = templateSlice.actions;