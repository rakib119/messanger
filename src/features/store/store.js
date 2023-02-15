import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../userSlice";

const store = configureStore({
    loginSlice: authSlice
});
export default store;