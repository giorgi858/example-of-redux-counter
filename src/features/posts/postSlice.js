import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    { 
        id: '1', 
        title:'title first', 
        content: 'content first',
        date: sub(new Date(), { minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    { 
        id: '2', 
        title:'title second', 
        content: 'content second',
        date: sub(new Date(), { minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
            state.push(action.payload)
            },
            prepare(title, content,userId) {
                return { payload: {
                    id: nanoid(), 
                    title, 
                    content, 
                    userId, 
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }   
                
                }
            }
            } 
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existPost = state.find(post => post.id ===postId)
            if (existPost) {
                existPost.reactions[reaction]++
            }
        }
    }
})
export const { postAdded, reactionAdded } = postSlice.actions
export const selectAllPosts = (state) => state.posts
export default postSlice.reducer;