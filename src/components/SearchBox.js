import React from 'react';

const SearchBox = ({searchField, searchChange }) => {
    return (
        <div id='searchBox' className='pa2'>
            <input
                className="pa3 ba bg-light-gray b--black"
                type="search"
                placeholder="Search Bands"
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;