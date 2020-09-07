import React from 'react'


const BookCard = (props) => {
    console.log("me",props.book)
const {book_title, author, genre, book_img, description} = props.book
    
   
    return (
        <>
        <h1>BookCard</h1>
        <h3>Title: {book_title}</h3>
        <h3>Author: {author}</h3>
       
        <h4>Genre: {genre}</h4>
        <h4>Book Image:</h4> <img src={book_img}/>
        <h4>Description: {description}</h4>
        {/* <h4>Review: {review}</h4> */}
        {/* <h4>Rating: {rating}</h4> */}



        
</>
     
    
        

    )
}




export default BookCard