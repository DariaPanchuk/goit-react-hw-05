import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTFkY2VkNDNjYzZkMGI5MzI3ODY0MTVhMDliZjVkNiIsInN1YiI6IjY1YzI4ODJlOGMwYTQ4MDE2NDg0ZTBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KN_HnRs2Ygj7O5C31YAT3KnO14sf_6wR2lBftb1XSOg';

export const fetchTrendingMovies = async () => {
    const url = 'trending/movie/day?language=en-US';
    
    const response = await axios.get(url);
    return response.data.results;
};

export const fetchByQuery = async (query, page) => {
    const url = `search/movie?query=${query}&include_adult=false&language=en-US&${page}`;
    
    const response = await axios.get(url);
    return response.data;
};

export const fetchById = async (movieId) => {
    const url = `movie/${movieId}?language=en-US`;
    
    const response = await axios.get(url);
    return response.data;
};

export const fetchCast = async (movieId) => {
    const url = `movie/${movieId}/credits?language=en-US`;
    
    const response = await axios.get(url);
    return response.data;
};

export const fetchReviews = async (movieId) => {
    const url = `movie/${movieId}/reviews?language=en-US&page=1`;
    
    const response = await axios.get(url);
    return response.data;
};



