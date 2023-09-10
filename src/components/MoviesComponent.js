import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/movieSlice";
import MovieComponent from "./MovieComponent";


const MoviesComponent = () => {

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);

    console.log(movies)

    useEffect(()=> {
        dispatch(movieActions.getAll())
    }, [])

    return (
        <div>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesComponent;