import React from 'react'




const AddBookForm = (props) => {



    return (
        <>
        <h1>AddBookForm</h1>
        <form>
             <label>Book Title:<input type="text" name="book"value="" /></label>
             <label>Genre:<input type="text" name="genre" value="" /></label>
             <label>Book Image:<input type="text" name="book_url" value=""/></label>
             <label>Description:<input type="text" name="description" value="" /></label>
             <input type="submit" value="Add Book" />
        </form>
        </>
        

    )
}




export default AddBookForm