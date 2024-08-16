import React, { useState } from "react";


function SearchBar() { 

 const  [searchValue, setSearchValue] = useState ("");

 //handle any changes in the input field
 
 const onSearch =((value)=> {
       setSearchValue(value);

//To trigger filtering based on searchValue

    console.log('Searching for:', value );

 } )

    return(
        <input

        type="text"
        placeholder="Search for Transactions"
        value={searchValue}
        onChange={(e)=>onSearch(e.target.value)}>

        </input>
    );

}
export default SearchBar;
