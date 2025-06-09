import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import myTaskReducer from "./slice/myTaskSlice";
import attendanceReducer from "./slice/attendanceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    myTask: myTaskReducer,
    attendance: attendanceReducer,
  },
});
