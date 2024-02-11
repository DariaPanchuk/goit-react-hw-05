import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import css from './SearchBar.module.css';

export const SearchBar = ({ value, onSearch }) => {
    const [values, setValues] = useState(value);

    const handleChange = (evt) => {
        setValues(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        if (evt.target.elements.query.value === "") {
            toast.error('This is an empty field!', {
                duration: 2000,
                position: 'bottom-center',
            });
            return;
        }

        onSearch(values);
    }

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    name="query"
                    value={value}
                    onChange={handleChange}
                    className={css.input}
                />
                <IconContext.Provider value={{ size: "2em", color: "#D5C8BD" }}>
                    <button type="submit" className={css.button}><AiOutlineSearch /></button>
                </IconContext.Provider>
            </form>
        </div>
    );
};