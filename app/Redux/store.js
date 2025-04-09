import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Redux/authSlice'
import profileSlice from '../Redux/profileSlice'
import roleSlice from '../Redux/roleSlice'
import eventManagementSlice from '../Redux/adminDashboard/eventsManagementSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileSlice,
        role: roleSlice,
        events_management: eventManagementSlice
    }
})

export default store

