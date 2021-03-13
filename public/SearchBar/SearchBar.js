import React from 'react';

function SearchBar() {
    
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    
    return (
        <form>

        <input onChange={handleChange} type ='input' placeholder='Search by name/spirit' />
        <input type ='submit' value='search' />
        
        </form>

    );
}

export default SearchBar;