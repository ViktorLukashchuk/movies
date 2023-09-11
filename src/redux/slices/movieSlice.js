import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesServices";

const initialState = {
    movies: [],
    genres: [],
    pages: 500,
    movie: {}
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

const getGenres = createAsyncThunk (
    'movieSlice/getGenres',
    async (_,{rejectWithValue}) =>{
        try {
            const {data} = await moviesService.getGenres();
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
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.movies = results
        })
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movie = action.payload
        })

})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getGenres,
    getMovieById
}
export {
    movieActions,
    movieReducer
}