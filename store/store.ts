import { configureStore } from '@reduxjs/toolkit'
import tweetSlice from './features/tweet/tweetSlice'

export const store = configureStore({
    reducer: {
        tweet: tweetSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch