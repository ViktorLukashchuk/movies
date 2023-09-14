import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesServices";

const initialState = {
    movies: [],
    pages: 500,
    movie: null,
    movieVideos: [],
    searchResult: []
}

const getAll = createAsyncThunk (
    'movieSlice/getAll',
        async ({page},{rejectWithValue}) =>{
            try {
                const {data} = await moviesService.getMovies(page);
                return data
            } catch (e) {
                return rejectWithValue(e.response.data)
            }
        }
);

const getMovieById = createAsyncThunk (
    'movieSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovieVideosByID = createAsyncThunk (
    'movieSlice/getMovieVideosByID',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getVideoById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk (
    'movieSlice/searchMovie',
    async ({query}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getByQuery(query)
            console.log(data)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.movies = results
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movie = action.payload
        })
        .addCase(getMovieVideosByID.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.movieVideos = results
        })
        .addCase(searchMovie.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.searchResult = results
        })

})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getMovieById,
    getMovieVideosByID,
    searchMovie
}
export {
    movieActions,
    movieReducer
}