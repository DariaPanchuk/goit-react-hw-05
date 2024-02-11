import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchByQuery } from '../api';
import { Title } from '../components/Title/Title';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { LoadMore } from '../components/LoadMore/LoadMore';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    const [params, setParams] = useSearchParams();
    const movieName = params.get('query') ?? '';

    const totalResults = useRef(0);
    const totalPages= useRef(0);

    const handleSearch = async newQuery => {
        if (movieName === newQuery) {
            toast.error('Results already on the screen!', {
                duration: 2000,
                position: 'bottom-center',
            });
            return
        }
        setMovies([]);
        setPage(1);
        setParams({query: newQuery});
    }

    useEffect(() => {
        const controller = new AbortController();

        if (movieName === "") {
            return
        }   

        async function fetchData() {
            try {
                setLoad(true);
                setError(false);
                const fetchedData= await fetchByQuery(movieName, page, {
                    abortController: controller,
                });
                setMovies(prevMovies => [...prevMovies, ...fetchedData.results]);
                totalPages.current = fetchedData.total_pages;
                totalResults.current = fetchedData.total_results;
                if (totalResults.current === 0) {
                    toast.error('Oops, please try another word!', {
                        duration: 2000,
                        position: 'bottom-center',
                    });
                }
            } catch {
                setError(true);
            } finally {
                setLoad(false);
            }
        }

        fetchData();
        
        return () => {
            controller.abort();
        };
    }, [page, movieName]);
    
    const handleClick = () => {
        setPage(page + 1);
    }

    return (
        <div>
            <Title>Search the movie</Title>
            {load && <Loader />}
            {error && <ErrorMessage />}
            <SearchBar value={movieName} onSearch={handleSearch} />
            {movies.length > 0 && <MoviesList movies={movies} />}
            {movies.length > 0 && !load && page !== totalPages.current && (<LoadMore onClick={handleClick} />)}
        </div>
    )
}