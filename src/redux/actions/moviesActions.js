import axios from "axios"
import { useSelector } from "react-redux"

import { ALL_MOVIES } from "../types/movieTypes";


export const getAllMovies = () => {
    return async (dis) => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9212ecc5bf4434d56dab8706a08ef6e5")
        dis({ type: ALL_MOVIES, data: res.data.results, pages: res.data.total_pages, searchWord: "" })
    }
}

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9212ecc5bf4434d56dab8706a08ef6e5&query=${word}&language=ar`)
        dispatch({ type: ALL_MOVIES, data: res.data.results, pages: res.data.total_pages, searchWord: word })

    }
}


export const paginate = (page, word) => {

    return async (dis) => {
        let res;
        if (word === "")
            res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=9212ecc5bf4434d56dab8706a08ef6e5&page=${page}`)
        else
            res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=9212ecc5bf4434d56dab8706a08ef6e5&query=${word}&page=${page}`)

        dis({ type: ALL_MOVIES, data: res.data.results, pages: res.data.total_pages, searchWord: word })
    }
}