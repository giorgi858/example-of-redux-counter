import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

const USERS_URL ='https://jsonplaceholder.typicode.com/users';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const response = await axios.get(USERS_URL)
    return response.data
})
console.log(fetchUsers);


const usersSlice = createSlice({
    name: 'users', 
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }

})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer;