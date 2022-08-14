import { configureStore } from "@reduxjs/toolkit"
import useReducer from './features/userSlice'
import boardReducer from './features/boardSlice'

export const store = configureStore({
    reducer: {
        user: useReducer,
        board: boardReducer,
    }
})