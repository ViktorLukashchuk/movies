import {apiMoviesService} from "./apiServices/apiMoviesServices";
import {urls} from "../constants/urls/urls";

export const moviesService = {
    getMovies: (page) => apiMoviesService.get(urls.moviesList, {params: {page: `${page}`}}),
    getGenres: () => apiMoviesService.get(urls.genresList),
    getById: (id) => apiMoviesService.get(`${urls.movieById}/${id}`),
    getByGenreId: (genreId, page) => apiMoviesService.get(urls.moviesList, {params: {sort_by: 'popularity.desc', with_genres: genreId, page}}),
    getVideoById: (id) => apiMoviesService.get(`${urls.movieById}/${id}/videos`),
    getByQuery: (query) => apiMoviesService.get(urls.searchMovie, {params: {query}}),
}