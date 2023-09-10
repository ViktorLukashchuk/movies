import React from 'react';

const MovieComponent = ({movie}) => {
    const {id, original_title, overview} = movie
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {original_title}</div>
            <div>overview: {overview}</div>
        </div>
    );
};

export default MovieComponent;