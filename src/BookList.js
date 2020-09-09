import React from 'react'
import BookCard from './BookCard'
import { Button } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'




const BookList = (props) => {
    console.log("POOP",props)
    
   
    return (
      <>
          
        <div class="display">
        <ul class="container-parent">
          {props.books.map(bookObj => <BookCard 
          deleteBookFromArray={props.deleteBookFromArray}
          key={bookObj.id} 
          book={bookObj} />)}
        </ul>
        </div>
      </>
    )
  }



export default BookList