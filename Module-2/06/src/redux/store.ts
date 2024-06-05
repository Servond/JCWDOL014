import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
