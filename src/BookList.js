import React from 'react'
import BookCard from './BookCard'




const BookList = (props) => {
    return (
      <>
        <h1>BookList</h1>
        <ul>
          {props.reviews.map(review => <BookCard key={review.id} book={review.book} />)}
        </ul>
      </>
    )
  }



export default BookList