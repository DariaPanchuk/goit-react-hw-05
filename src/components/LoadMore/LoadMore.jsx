import css from './LoadMore.module.css';

export const LoadMore = ({ onClick }) => {
    return (
        <div className={css.container}>
            <button className={css.button} type="button" onClick={onClick} >Load More</button>
        </div>
    );
};