import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Genre from "./Genre";
import {genreActions} from "../../redux/slices/genreSlice";

const Genres = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genreReducer);

    useEffect(()=> {
        dispatch(genreActions.getGenres())
    }, []);

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;