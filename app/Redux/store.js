import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Redux/authSlice'
import profileSlice from '../Redux/profileSlice'
import roleSlice from '../Redux/roleSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileSlice,
        role: roleSlice
    }
})

export default store

