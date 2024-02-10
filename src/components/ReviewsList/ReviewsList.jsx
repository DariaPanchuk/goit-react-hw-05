import { ReviewCard } from '../ReviewCard/ReviewCard';
import css from './ReviewsList.module.css';

export const ReviewsList = ({reviews}) => {
    return (
        <ul className={css.list}>
            {reviews && reviews.map(review => (
                <li key={review.id} className={css.item}>
                    <ReviewCard review={review} />
                </li>
            ))}
        </ul>
    );
}