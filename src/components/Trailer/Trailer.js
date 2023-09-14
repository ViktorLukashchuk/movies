import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TrailerComponent} from "./TrailerComponent";
import {trailerUrl} from "../../constants/urls/urls";
import {movieActions} from "../../redux/slices/movieSlice";

const Trailer = ({id}) => {
    const dispatch = useDispatch()
    const {movieVideos} = useSelector(state => state.movieReducer);
    const trailer = movieVideos?.filter(video => video.name === 'Official Trailer');

    useEffect(()=> {
        dispatch(movieActions.getMovieVideosByID({id}))
    }, [])

    return (
        <div>
            {trailer.length !== 0 && <TrailerComponent src={`${trailerUrl}${trailer[0].key}`} />}
        </div>
    );
};

export default Trailer;