import React from 'react'
import BookList from "./BookList"
import Search from './Search'
import AddBookForm from './AddBookForm';


class BookContainer extends React.Component {
    render() {
        console.log("Container",this.props)
        this.props.reviews.map((booksObj) => {
            return <BookList key={booksObj.id} books={booksObj} />
        })
        
        return (
            <>
                <h1>🔥Lit Books!🔥</h1>
                <AddBookForm />
                <Search />
                <BookList reviews={this.props.reviews}/>
            </>
    

    )}
}


export default BookContainer