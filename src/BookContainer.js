import React from 'react'
import BookList from "./BookList"
import Search from './Search'
import AddBookForm from './AddBookForm';





const BookContainer = (props) => {



    return (
        <>
        <h1>BookContainer</h1>
        <BookList />
        <Search />
        <AddBookForm />
        </>
        

    )
}




export default BookContainer