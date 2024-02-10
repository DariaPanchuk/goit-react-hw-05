import css from './MovieCard.module.css';

export const MovieCard = ({ movie: { title, poster_path } }) => {
    const defaultImg = 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllfGVufDB8fDB8fHww';

    return (
        <div>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg} alt={title} width="400" className={css.img}/>
            <p className={css.title}>{title}</p>
        </div>
    );
};