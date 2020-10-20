import React from 'react'
import BookList from "./BookList"

class BookContainer extends React.Component {
    render() {
        this.props.books.map((booksObj) => {
            return <BookList key={booksObj.id} books={booksObj} />
        })

        return (
            <>
                <h1 className="lit">Lit Books!</h1>

                <BookList books={this.props.books}
                    deleteBookFromArray={this.props.deleteBookFromArray} />
            </>


<<<<<<< HEAD
const BookContainer = (props) => {



    return (
        <>
        <h1>BookContainer</h1>
        <p>Testing</p>
        <BookList />
        <Search />
        <AddBookForm />
        </>
        

    )
=======
        )
    }
>>>>>>> kelsey
}


export default BookContainer