import React from 'react'




const Search = (props) => {

let handleChange = evt => {
    
  props.changeSearchTerm(evt.target.value)
}

    return (
        <>
        <h1>Search</h1>
        <input type="text" value={props.searchTerm} onChange={handleChange}placeholder="Search Lit Book.."/>
        </>

    )
}




export default Search