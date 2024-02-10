import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../api';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ReviewsList } from '../ReviewsList/ReviewsList';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setLoad(true);
                setError(false);
                const fetchedReviews = await fetchReviews(movieId, {
                    abortController: controller,
                });
                setReviews(fetchedReviews.results);
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
            {reviews.length > 0 ? <ReviewsList reviews={reviews} /> : <p>Sorry, movie does not have any reviews.</p>}
        </div>
    );
}