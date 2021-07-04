import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => ({
      count:
        action.payload >= 0 ? state.count + action.payload : state.count + 1,
    }),
    subtract: (state, action) => ({
      count:
        action.payload >= 0 ? state.count - action.payload : state.count - 1,
    }),
    multiply: (state, action) => ({
      count:
        action.payload >= 0 ? state.count * action.payload : state.count * 2,
    }),
    divide: (state, action) => ({
      count:
        action.payload > 0 ? state.count / action.payload : state.count / 2,
    }),
    resetToZero: () => ({
      count: 0,
    }),
    resetToOne: () => ({
      count: 1,
    }),
    resetToTwo: () => ({
      count: 2,
    }),
    square: (state) => ({
      count: state.count * state.count,
    }),
    mod: (state) => ({
      count: state.count % 2,
    }),
    flip: (state) => ({
      count: state.count * -1,
    }),
  },
});

export const {
  add,
  subtract,
  multiply,
  divide,
  resetToZero,
  resetToOne,
  resetToTwo,
  update,
  square,
  mod,
  flip,
} = counter.actions;

export default counter.reducer;
