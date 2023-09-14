import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/movieSlice";
import MovieComponent from "../MovieComponent/MovieComponent";

const MoviesFromSearch = () => {

    const dispatch = useDispatch();
    const {searchResult} = useSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');
    const queryParam = query.get('query');


    useEffect(()=> {
        dispatch(movieActions.searchMovie({queryParam}))
    }, [page])

    return (
        <div style={
            {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px"
            }
        }>
            {searchResult?.map(movie => <MovieComponent key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesFromSearch;