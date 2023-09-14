import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {genreActions} from "../../redux/slices/genreSlice";
import MovieComponent from "../MovieComponent/MovieComponent";

const MoviesByGenreComponent = () => {

    const dispatch = useDispatch();
    const {moviesByGenre} = useSelector(state => state.genreReducer);
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    const genreId = useParams();
    const id = Number(genreId.id)

    useEffect(()=> {
        dispatch(genreActions.getMoviesByGenre({id, page}))
    }, [page])

    return (
        <div style={
            {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px"
            }
        }>
            {moviesByGenre?.map(movie => <MovieComponent key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesByGenreComponent;