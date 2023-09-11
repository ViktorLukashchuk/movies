import React from 'react';

const Genre = ({genre}) => {
    const {name} = genre
    return (
        <ul>
            <li>{name}</li>
        </ul>
    );
};

export default Genre;