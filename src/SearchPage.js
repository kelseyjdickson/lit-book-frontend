import React from "react";


const SearchPage = (props) => {

  let handleChange = evt => {
    props.changeSearchTerm(evt.target.value)
  }
  return (
  
      <div className="searchBar">
        <input class="select" type="text" placeholder="Search Lit Book by Title..." value={props.searchTerm} onChange={handleChange}aria-label="Search" />
   </div>
  );
}

export default SearchPage;