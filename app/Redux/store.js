import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Redux/authSlice'
import profileSlice from '../Redux/profileSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileSlice
    }
})

export default store

