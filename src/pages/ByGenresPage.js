import React from 'react';
import MoviesByGenreComponent from "../components/MoviesByGenres/MoviesByGenreComponent";
import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const ByGenresPage = () => {
    const [query, seQuery] = useSearchParams();
    const {pages} = useSelector(state => state.genreReducer);
    return (
        <div>
            <MoviesByGenreComponent/>
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

export default ByGenresPage;