import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import MovieComponent from "./MovieComponent";
import {useSearchParams} from "react-router-dom";


const MoviesComponent = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams({page:'1'});

    const page = query.get('page');

   useEffect(()=> {
        dispatch(movieActions.getAll({page}))
    }, [page])

    return (
        <div style={
            {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px"
        }
        }>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesComponent;