import css from './CastCard.module.css';

export const CastCard = ({ item: { name, character, profile_path } }) => {
    const defaultImg = 'https://images.unsplash.com/photo-1614946973832-3363a78a2026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1vdmllfGVufDB8fDB8fHww';

    return (
        <div className={css.card}>
            <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg} alt={name} width="200" className={css.img}/>
            <p className={css.name}>{name}</p>
            <p className={css.character}>{character}</p>
        </div>
    );
};