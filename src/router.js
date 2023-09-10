import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {links} from "./constants/links/links";
import MoviesListPage from "./pages/MoviesListPage";
import MovieInfoPage from "./pages/MovieInfoPage";

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
            path: `${links.MOVIES}/:movieId`,
            element: <MovieInfoPage />
        }
    ]
}])

export {
    router
}