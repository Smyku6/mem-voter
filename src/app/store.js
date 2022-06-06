import { configureStore } from '@reduxjs/toolkit'
import memesReducer from './memesSlice'
import sectionReducer from './sectionSlice'

export const store = configureStore({
    reducer: {
        memes: memesReducer,
        section: sectionReducer,
    },
})
