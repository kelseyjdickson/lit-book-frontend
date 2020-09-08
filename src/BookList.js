import React from 'react'
import BookCard from './BookCard'




const BookList = (props) => {
    console.log("POOP",props)
    return (
      <>
        <h1>BookList</h1>
        <ul>
          {props.books.map(bookObj => <BookCard 
          deleteBookFromArray={props.deleteBookFromArray}
          key={bookObj.id} 
          book={bookObj} />)}
        </ul>
      </>
    )
  }



export default BookList