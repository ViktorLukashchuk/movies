import React from 'react';
import {useNavigate} from "react-router-dom";
import {links} from "../../constants/links/links";
import {w500PosterUrl} from "../../constants/urls/urls";
import {StarRating} from "../Rating/StarRating";

const MovieComponent = ({movie}) => {
    const {id, original_title, overview, poster_path, vote_average} = movie
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(links.MOVIE + '/' + id)} style={{textAlign:"center"}}>
            <img src={`${w500PosterUrl}${poster_path}`}  alt={original_title}/>
            <div style={{fontWeight: "bold"}}>{original_title}</div>
            <div>{overview}</div>
            <br/>
            <StarRating vote_average={vote_average}/>
        </div>
    );
};

export default MovieComponent;