import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosSecure from "../../utils/axiosSecure";


export const eventsManagementDataCreate = createAsyncThunk(
    "events_management/eventsManagementDataCreate",
    async ({ data }) => {
        const response = await axiosSecure.post("/api/dashboard/events_management", data)
        console.log('checking event data', response.data.data)
        return response.data.data
    }
)

export const eventsManagementFetched = createAsyncThunk(
    "events_management/eventsManagementFetched",
    async () => {
        const response = await axiosSecure.get("/api/dashboard/events_management_data")
        console.log('checking data', response.data.data)
        return response.data.data
    }
)


const eventsManagement = createSlice({
    name: "events_management",
    initialState: {
        eventsData: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            // Event Data fetched
            .addCase(eventsManagementFetched.pending, (state) => {
                state.loading = true;
            })
            .addCase(eventsManagementFetched.fulfilled, (state, action) => {
                state.loading = false;
                state.eventsData = action.payload;
            })
            .addCase(eventsManagementFetched.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Event Data Create
            .addCase(eventsManagementDataCreate.pending, (state) => {
                state.loading = true;
            })
            .addCase(eventsManagementDataCreate.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(action.payload)) {
                    state.eventsData = [...state.eventsData, ...action.payload];
                } else {
                    state.eventsData = [...state.eventsData, action.payload]
                }
            })
            .addCase(eventsManagementDataCreate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})


export default eventsManagement.reducer