import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../api';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { CastList } from '../CastList/CastList';


export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setLoad(true);
                setError(false);
                const fetchedCast = await fetchCast(movieId, {
                    abortController: controller,
                });
                setCast(fetchedCast.cast);
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
    }, [movieId]);
    
    return (
        <div>
            {load && <Loader />}
            {error && <ErrorMessage />}
            {cast && <CastList data={cast} />}
        </div>
    );
}