import { createSlice } from '@reduxjs/toolkit'
import TXT from '../constans/TXT'
import TYPE from '../constans/TYPE'

const initialState = {
    activeSection: TYPE.REGULAR,
}

const sectionSlice = createSlice({
    name: `${TXT.REDUX_STORE_NAME_MEME}`,
    initialState,
    reducers: {
        setSelection: (state, action) => {
            const { payload } = action
            state.activeSection = payload
        },
    },
})

export const { setSelection } = sectionSlice.actions

const sectionReducer = sectionSlice.reducer

export default sectionReducer
