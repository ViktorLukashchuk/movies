import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {links} from "./constants/links/links";
import MoviesListPage from "./pages/MoviesListPage";

import GenresPage from "./pages/GenresPage";
import MovieInfo from "./components/MovieInfoComponent/MovieInfo";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([{
    path: '',
    element: <MainLayout/>,
    children: [
        /*{
            index: true,
            element: <Navigate to={links.MOVIES} />,
        },*/
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
        }
    ]
}])

export {
    router
}