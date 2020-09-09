import React from 'react'
import BookList from "./BookList"






class BookContainer extends React.Component {
    render() {
        // console.log("Container",this.props)
        this.props.books.map((booksObj) => {
            return <BookList key={booksObj.id} books={booksObj} />
        })
        
        return (
            <>
                <h1 class="lit">Lit Books!</h1>
               
               
                <BookList books={this.props.books}
                deleteBookFromArray={this.props.deleteBookFromArray}/>
                
            </>
    

    )}
}


export default BookContainer