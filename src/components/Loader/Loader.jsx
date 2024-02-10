import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.container}>
            <Oval
                visible={true}
                height="100"
                width="100"
                color="#D5C8BD"
                secondaryColor="#D5C8BD"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};