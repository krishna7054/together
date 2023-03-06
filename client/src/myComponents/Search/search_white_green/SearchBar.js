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

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
