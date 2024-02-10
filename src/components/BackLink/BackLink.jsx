import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ href, children }) => {
    return (
        <div className={css.container}>
            <Link to={href}>{children}</Link>
        </div>);
};