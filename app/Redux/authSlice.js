import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false, 
        error: null
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.user = null
        }
    },
    // extraReducers: (builder) => {
    //     builder

    // }
})

export default authSlice.reducer

