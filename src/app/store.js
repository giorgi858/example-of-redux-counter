import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/couter/coutnerSlice'
import postsReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
})