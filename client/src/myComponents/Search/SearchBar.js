
import React, { useState } from 'react';
import classes from './SearchBar.module.css'
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search logic here, such as making a API call
        console.log(`Searching for: ${searchTerm}`);
    };

    return (
        <div className={classes.search}>

            <form onSubmit={handleSubmit} className={classes.form}>

                <input className={classes.input} placeholder="Search Products & Services..." value={searchTerm} type="text" onChange={handleSearch} />
                <button button className={classes.reset} type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
