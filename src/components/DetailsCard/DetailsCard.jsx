import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import clsx from 'clsx';
import css from './DetailsCard.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export const DetailsCard = ({ movie: { title, poster_path, release_date, budget, vote_average, overview, genres } }) => {
    const defaultImg = 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllfGVufDB8fDB8fHww';
    
    return (
        <div className={css.container}>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} width="400" className={css.img} />
            <div className={css.details}>
                <h2 className={css.title}>{title}</h2>
                <p className={css.item}><span className={css.detailName}>Release Date:</span> <span className={css.detailItem}>{release_date}</span></p>
                <p className={css.item}><span className={css.detailName}>Budget:</span> <span className={css.detailItem}>{budget}</span></p>
                <p className={css.item}><span className={css.detailName}>Average score:</span> <span className={css.detailItem}>{vote_average}</span></p>
                <p className={css.item}><span className={css.detailName}>Overview:</span> <span className={css.detailItem}>{overview}</span></p>
                <ul className={css.list}>
                    <p><span className={css.detailName}>Genres:</span></p>
                    {genres && genres.map(genre => (
                        <li key={genre.id}>
                            <span className={css.detailItem}>{genre.name}</span>
                        </li>
                    ))}
                </ul>
                <div className={css.links}>
                    <NavLink to='cast' className={buildLinkClass}>Cast</NavLink>
                    <NavLink to='reviews' className={buildLinkClass}>Reviews</NavLink>
                </div>

                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};