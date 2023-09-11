import React from 'react';
import {w500PosterUrl} from "../../constants/urls/urls";
import {useNavigate} from "react-router-dom";
import {links} from "../../constants/links/links";

const MovieComponent = ({movie}) => {
    const {id, original_title, overview, poster_path} = movie
    const navigate = useNavigate();
    return (
        <div style={{textAlign:"center"}}>
            <img src={`${w500PosterUrl}${poster_path}`}  alt={original_title}/>
            <div style={{fontWeight: "bold"}}>{original_title}</div>
            <div>{overview}</div>
            <br/>
            <button onClick={()=>navigate(links.MOVIE + '/' + id)}>More info</button>
        </div>
    );
};

export default MovieComponent;