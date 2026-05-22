import { ALL_MOVIES } from "../types/movieTypes";
export const moviesReducer = (state = {movies:[] , pageCount:0 , searchWord:"" } , action)=>{
    switch (action.type) {
        case ALL_MOVIES:
            return {movies:action.data , pageCount:action.pages , searchWord:action.searchWord }
        default:
            return state
    }
}

