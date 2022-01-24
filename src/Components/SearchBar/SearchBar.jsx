import React, { useState } from "react";


const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('')



    function handleSubmit(formEvent){
        formEvent.preventDefault();
        props.filterVideos(searchTerm)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search Music</label>
            <input type='text' placeholder='Search..' onChange={event => {setSearchTerm(event.target.value);}}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;