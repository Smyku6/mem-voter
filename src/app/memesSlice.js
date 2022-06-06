import { createSlice } from '@reduxjs/toolkit'
import TXT from '../constans/TXT'
import TYPE from '../constans/TYPE'

const initialState = {
    loading: false,
    list: [],
}

const votesDifference = 5

const memesSlice = createSlice({
    name: `${TXT.REDUX_STORE_NAME_MEME}`,
    initialState,
    reducers: {
        saveToLocalStorage: (state) => {
            window.localStorage.setItem(
                `${TXT.LOCAL_STORAGE_NAME}`,
                JSON.stringify(state.list)
            )
        },

        getFromLocalStorage: (state) => {
            const listFromLocalStorage = JSON.parse(
                window.localStorage.getItem(`${TXT.LOCAL_STORAGE_NAME}`)
            )
            console.log(listFromLocalStorage)
            return { ...state, list: listFromLocalStorage }
        },

        startFetch: (state) => {
            state.loading = true
        },

        save: (state, action) => {
            const { payload } = action
            state.loading = false
            state.list = payload
        },

        upvote: (state, { payload }) => {
            const newMemesList = state.list.map((meme) => {
                if (meme.id === payload) {
                    if (meme.upvotes - meme.downvotes + 1 === votesDifference) {
                        return {
                            ...meme,
                            upvotes: meme.upvotes + 1,
                            type: `${TYPE.HOT}`,
                        }
                    } else {
                        return {
                            ...meme,
                            upvotes: meme.upvotes + 1,
                        }
                    }
                }
                return meme
            })
            return { ...state, list: newMemesList }
        },

        downvote: (state, { payload }) => {
            const newMemesList = state.list.map((meme) => {
                if (meme.id === payload) {
                    if (meme.downvotes - meme.upvotes + 1 === votesDifference) {
                        return {
                            ...meme,
                            downvotes: meme.downvotes + 1,
                            type: `${TYPE.REGULAR}`,
                        }
                    } else {
                        return {
                            ...meme,
                            downvotes: meme.downvotes + 1,
                        }
                    }
                }
                return meme
            })
            return { ...state, list: newMemesList }
        },

        addToFavorites: (state, { payload }) => {
            const newMemesList = state.list.map((meme) => {
                if (meme.id === payload) {
                    return {
                        ...meme,
                        favorite: true,
                    }
                }
                return meme
            })
            return { ...state, list: newMemesList }
        },

        removeFromFavorites: (state, { payload }) => {
            const newMemesList = state.list.map((meme) => {
                if (meme.id === payload) {
                    return {
                        ...meme,
                        favorite: false,
                    }
                }
                return meme
            })
            return { ...state, list: newMemesList }
        },
    },
})

export const {
    save,
    startFetch,
    upvote,
    downvote,
    addToFavorites,
    removeFromFavorites,
    saveToLocalStorage,
    getFromLocalStorage,
} = memesSlice.actions

export const fetchMemes = () => {
    return async (dispatch) => {
        if (window.localStorage.hasOwnProperty(`${TXT.LOCAL_STORAGE_NAME}`)) {
            dispatch(getFromLocalStorage())
        } else {
            dispatch(save([]))
            dispatch(startFetch())
            fetch(`${TXT.API_ADDRESS}`)
                .then((response) => response.json())
                .then((memes) => dispatch(save(memes)))
                .then((memes) => dispatch(saveToLocalStorage(memes.list)))
        }
    }
}

const memesReducer = memesSlice.reducer

export default memesReducer
