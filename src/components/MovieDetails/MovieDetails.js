import styles from './MovieDetails.module.css';
import {w500PosterUrl} from "../../constants/urls/urls";
import {Link} from "react-router-dom";
import {links} from "../../constants/links/links";
import React from "react";
import Trailer from "../Trailer/Trailer";
import {StarRating} from "../Rating/StarRating";
const MovieDetails = ({movie}) => {

    const {release_date, original_title, tagline, poster_path, genres, vote_average, vote_count, runtime, production_countries, id} = movie

    return (
    <div>
    <div className={styles.flexContainer}>
        {poster_path &&
            <div className={styles.posterContainer}>
                <img className={styles.poster} src={`${w500PosterUrl}${poster_path}`}
                     alt={original_title}/>
            </div>}
        <div>
            <div className={styles.gridContainer}>
                {vote_average !== null && vote_average !== undefined && <>
                    <h3>Ratings:</h3>
                    <p><b>{vote_average.toFixed(1)}</b> ({vote_count})</p>
                </>}
                {release_date && <>
                    <h3>Release date:</h3>
                    <p>{release_date}</p>
                </>}
                {tagline && <>
                    <h3>Tagline:</h3>
                    <p>{tagline}</p>
                </>}
                {genres.length ?
                    <>
                        <h3>Genre:</h3>
                        <div>
                            {genres?.map((genre, index) => {
                                return (
                                    <Link key={genre.name} to={`${links.GENRES}/${genre.id}`}>
                                        {genre.name}
                                        {index !== genres.length - 1 && ','}
                                    </Link>
                                );
                            })}
                        </div>
                    </> :
                    <></>
                }
                {runtime !== null && runtime !== undefined && <>
                    <h3>Runtime:</h3>
                    <p>{runtime} min</p>
                </>}
                {production_countries && <>
                    <h3>Country:</h3>
                    <div>
                        {production_countries?.map((country, index) => {
                            return <span key={country.name}>
                                    {index !== production_countries.length - 1 ?
                                        `${country.name}, ` :
                                        country.name
                                    }
                                </span>
                        })}
                    </div>
                </>}
            </div>
        </div>



    </div>
        <h2 className={styles.title}>Rating of the film - {vote_average}/10 - {vote_count} votes</h2>
       <StarRating vote_average={vote_average} vote_count={vote_count}/>
        <Trailer id={id}/>
    </div>
);
};

export {MovieDetails};