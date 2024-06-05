import { createSlice } from "@reduxjs/toolkit";

export interface ICount {
  value: number;
}

interface IPayload {
  payload: number;
}

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: ICount) => {
      state.value += 1;
    },
    decrement: (state: ICount) => {
      state.value -= 1;
    },
    incrementByAmount: (state: ICount, action: IPayload) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
