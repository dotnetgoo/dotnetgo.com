import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./pages/homeSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
