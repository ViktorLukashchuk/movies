import {createBrowserRouter, Navigate, useParams} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {links} from "./constants/links/links";
import MoviesListPage from "./pages/MoviesListPage";
import GenresPage from "./pages/GenresPage";
import MoviePage from "./pages/MoviePage";
import ByGenresPage from "./pages/ByGenresPage";
import MoviesFromSearch from "./components/MoviesFromSearch/MoviesFromSearch";

const router = createBrowserRouter([{
    path: '',
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Navigate to={links.MOVIES} />,
        },
        {
            path: links.MOVIES,
            element: <MoviesListPage />,
        },
        {
            path: links.GENRES,
            element: <GenresPage/>
        },
        {
            path: links.MOVIEID,
            element: <MoviePage/>,
        },
        {
            path: links.GENRESID,
            element: <ByGenresPage/>,
        },
        {
            path: 'search/movie',
            element: <MoviesFromSearch/>,
        },

    ]
}

])

export {
    router
}