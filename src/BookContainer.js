import React from 'react'
import BookList from "./BookList"
import Search from './Search'
import AddBookForm from './AddBookForm';


class BookContainer extends React.Component {
    render() {
        // console.log("Container",this.props)
        this.props.books.map((booksObj) => {
            return <BookList key={booksObj.id} books={booksObj} />
        })
        
        return (
            <>
                <h1>Lit Books!</h1>
                {/* <AddBookForm addBook={this.props.addBook}/> */}
                
                {/* <Search searchTerm={this.props.searchTerm}
                changeSearchTerm={this.changeSearchTerm}/> */}
                
                <BookList books={this.props.books}
                deleteBookFromArray={this.props.deleteBookFromArray}/>
                
            </>
    

    )}
}


export default BookContainer