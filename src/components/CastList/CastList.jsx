import { CastCard } from '../CastCard/CastCard';
import css from './CastList.module.css';

export const CastList = ({data}) => {
    return (
        <ul className={css.list}>
            {data && data.map(item => (
                <li key={item.id} className={css.item}>
                    <CastCard item={item} />
                </li>
            ))}
        </ul>
    );
}