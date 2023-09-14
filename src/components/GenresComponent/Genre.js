import React from 'react';
import {links} from "../../constants/links/links";
import {Link} from "react-router-dom";

const Genre = ({genre}) => {
    const {id, name} = genre
    return (
        <ul>
           <Link key={name} to={`${links.GENRES}/${id}`}>
                {name}
           </Link>
        </ul>
    );
};

export default Genre;