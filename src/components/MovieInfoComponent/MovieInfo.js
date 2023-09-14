import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import {MovieDetails} from "../MovieDetails/MovieDetails";
import {useParams} from "react-router-dom";

const MovieInfo = () => {

    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movieReducer);
    const movieId = useParams();
    const id = Number(movieId.id)

    useEffect(()=> {
        dispatch(movieActions.getMovieById({id}))
    }, [])

    return (
        <div>

            {movie && <MovieDetails key={movie.id} movie={movie}/>}

        </div>
    );
};

export default MovieInfo;