import {apiMoviesService} from "./apiServices/apiMoviesServices";
import {urls} from "../constants/urls/urls";

export const moviesService = {
    getMovies: () => apiMoviesService.get(urls.moviesList)

}