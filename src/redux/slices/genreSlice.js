import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesServices";

const initialState = {
    moviesByGenre: [],
    pages: 500,
    genres: [],

}

const getMoviesByGenre = createAsyncThunk (
    'genreSlice/getMoviesByGenre',
    async ({id, page},{rejectWithValue}) =>{
        try {
            const {data} = await moviesService.getByGenreId(id, page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk (
    'genreSlice/getGenres',
    async (_,{rejectWithValue}) =>{
        try {
            const {data} = await moviesService.getGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers:{},
    extraReducers: builder => builder
           .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres
        })
        .addCase(getMoviesByGenre.fulfilled, (state, action)=>{
            state.moviesByGenre = action.payload.results
        })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getGenres,
    getMoviesByGenre
};

export {
    genreActions,
    genreReducer
}