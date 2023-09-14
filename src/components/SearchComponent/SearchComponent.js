import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import {useNavigate} from "react-router-dom";

const SearchComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        reset,
        register,
        handleSubmit
    } = useForm();

    const search = async (queryParam) => {
        await dispatch(movieActions.searchMovie(queryParam))
        navigate(`search/movie`)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'query'}{...register("query")}/>
            <button>Search</button>
        </form>
    );
};

export default SearchComponent;