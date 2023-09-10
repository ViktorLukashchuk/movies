import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesServices";


const initialState = {
    movies: []
}

const getAll = createAsyncThunk (
    'movieSlice/getAll',
        async (_,{rejectWithValue}) =>{
            try {
                const {data} = await moviesService.getMovies();
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
            state.movies = action.payload.results
        })
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll
}
export {
    movieActions,
    movieReducer
}