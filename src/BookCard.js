import React from 'react'
import { Button } from 'react-bootstrap';


class BookCard extends React.Component{
    
    handleDelete = (evt) => {
        console.log("hi",this.props.book.id);
        //delete a book using fetch
        fetch(`http://localhost:3000/books/${this.props.book.id}`,{
            method: "DELETE",
            })
            .then(res => res.json())
            .then((deletedBook) => {
                //send up the id to app comp
                this.props.deleteBookFromArray(deletedBook.id)

            })

    }
    
    
    render(){
   
  let { book_title, author, genre, book_img, description} = this.props.book
    



    return (
        <>
        
        <h3>Title: {book_title}</h3>
        <h3>Author: {author}</h3>
       
        <h4>Genre: {genre}</h4>
        <img src={book_img} alt="bookcover"/>
        <h4>Description: {description}</h4>
        <form>
            <label></label>
            <label></label>
        </form>
         
       
        <Button variant="secondary"onClick={this.handleDelete} >Delete Book</Button>{' '}
    </>
     )
}
}




export default BookCard