import React from 'react';
import {Link} from "react-router-dom";
import {links} from "../constants/links/links";
import SearchComponent from "../components/SearchComponent/SearchComponent";

const NavBar = () => {
    const buttons = [
        {
            label: 'Movies',
            route: links.MOVIES

        },
        {
            label: 'Genres',
            route: links.GENRES
        }
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
                </Link>)
            }
            <SearchComponent/>
           </div>
    );
};

export default NavBar;