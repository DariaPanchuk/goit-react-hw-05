import css from './ReviewCard.module.css';

export const ReviewCard = ({ review: { author, content } }) => {
    return (
        <div className={css.card}>
            <p className={css.author}>{author}</p>
            <p className={css.content}>{content}</p>
        </div>
    );
};