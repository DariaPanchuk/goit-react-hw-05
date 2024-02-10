import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api';
import { Title } from '../components/Title/Title';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoad(true);
                setError(false);
                const fetchedData = await fetchTrendingMovies();
                setMovies(fetchedData);
            } catch {
                setError(true);
            } finally {
                setLoad(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <Title>Trending today</Title>
            {load && <Loader />}
            {error && <ErrorMessage />}
            {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    )
}