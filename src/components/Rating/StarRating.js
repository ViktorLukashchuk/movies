import StarRatings from "react-star-ratings/build/star-ratings";
import styles from "./StarRating.module.css";
import React from "react";


const StarRating = ({vote_average}) => {
    return (


        <StarRatings
            rating={vote_average}
            starRatedColor="gold"
            numberOfStars={10}
            name='rating'
            starDimension="20px"
            starSpacing="5px"
        />

    );
};

export {
    StarRating
};