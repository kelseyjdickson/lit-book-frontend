import React from 'react'
import BookCard from './BookCard'





const BookList = (props) => {
  
    
 
 
 
    return (
      <>
          
        <div class="display">
        <ul class="container-parent">
          {props.books.map(bookObj => <BookCard 
          deleteBookFromArray={props.deleteBookFromArray}
          key={bookObj.id} 
          book={bookObj} 
          reviews={bookObj.reviews}/>) }
        </ul>
        </div>
      </>
    )
  }



export default BookList