import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    const buttons = [
        {
            label: 'Movies',

        },
        {
            label: 'Genres',

        },
        {
            label: 'Search',

        },
    ]
    return (
        <div style={
            {
                width:"100%",
                height:40,
                backgroundColor: "coral",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
            {buttons.map((btn, idx) =>
                <Link key={idx} to={btn.route}>
                    {btn.label}
                </Link>)}
        </div>
    );
};

export default NavBar;