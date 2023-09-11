import React from 'react';
import MoviesComponent from "../components/MovieListComponent/MoviesComponent";
import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const MoviesListPage = () => {
    const [query, seQuery] = useSearchParams();
    const {pages} = useSelector(state => state.movieReducer);
    return (
        <div>
            <MoviesComponent/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => seQuery({page: page.toString()})}
                style={{display: 'flex', justifyContent: 'center', margin: '15px'}}
            />
        </div>
    );
};

export default MoviesListPage;