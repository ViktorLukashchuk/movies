import {apiMoviesService} from "./apiServices/apiMoviesServices";
import {urls} from "../constants/urls/urls";

export const moviesService = {
    getMovies: (page) => apiMoviesService.get(urls.moviesList, {params: {page: `${page}`}}),
    getGenres: () => apiMoviesService.get(urls.genresList),
    getById: (id) => apiMoviesService.get(`${urls.movieById}/${id}`),

}