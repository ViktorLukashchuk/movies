import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import Genre from "./Genre";

const Genres = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.movieReducer);

    useEffect(()=> {
        dispatch(movieActions.getGenres())
    }, []);

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;