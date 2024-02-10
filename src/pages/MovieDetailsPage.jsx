import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchById } from '../api';
import { Title } from '../components/Title/Title';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { DetailsCard } from '../components/DetailsCard/DetailsCard';
import { BackLink } from '../components/BackLink/BackLink';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [details, setDetails] = useState({});
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    const location = useLocation();
    const backLinkRef = useRef(location.state);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setLoad(true);
                setError(false);
                const fetchedDetails = await fetchById(movieId, {
                    abortController: controller,
                });
                setDetails(fetchedDetails);
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
            <Title>About the movie</Title>
            <BackLink href={backLinkRef.current ?? '/'}>
                Back
            </BackLink>
            {load && <Loader />}
            {error && <ErrorMessage />}
            {details && <DetailsCard movie={details} />}
        </div>
    )
}
