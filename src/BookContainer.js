import React from 'react'
import BookList from "./BookList"
import Search from './Search'
import AddBookForm from './AddBookForm';





const BookContainer = (props) => {



    return (
        <>
        <h1>🔥Lit Books!🔥</h1>
        <AddBookForm />
        <Search />
        <BookList />
        </>
        

    )
}




export default BookContainer