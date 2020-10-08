import React from 'react';
import './App.css';
import BookContainer from './BookContainer'
import SearchPage from './SearchPage';
import AddBookForm from './AddBookForm';
import Header from './Header';
import ReviewForm from './ReviewForm';
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'




class App extends React.Component {
  state = {
    books: [],
    searchTerm: '',
    username: ""

  }

  // Accessing an array of books from the backend
  componentDidMount() {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then((booksArr) => {
        this.setState({
          books: booksArr
        })
      })
  }

  // Search Feature 
  changeSearchTerm = (theSearchedInput) => {
    this.setState({
      searchTerm: theSearchedInput

    })
  }


  // Adding new book 
  addBook = newBook => {
    let arrOfBooks = [...this.state.books, newBook]
    this.setState({
      books: arrOfBooks
    })
  }
  //ReviewForm callback function
  replaceBook = (updatedBook) => {
    let arrOfBooks = this.state.books.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook
      } else {
        return book
      }
    })
    this.setState({
      books: arrOfBooks
    })
  }

  // Deleting book from the array
  deleteBookFromArray = (idFromChild) => {
    let copyOfBooks = this.state.books.filter((book) => {
      return book.id !== idFromChild
    })
    this.setState({
      books: copyOfBooks
    })

  }






  render() {
    let filteredBook = this.state.books.filter((bookObject) => {
      return bookObject.book_title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <>
        <div class="App">
          {/* NAV BAR */}
          <NavBar />

          {/* SEARCH */}
          <SearchPage
            searchTerm={this.state.searchTerm}
            changeSearchTerm={this.changeSearchTerm} />
          <Header />


          {/* ADD FORM */}
          <Route path="/form">
            <AddBookForm addBook={this.addBook} />
          </Route>




          {/* REVIEW FORM */}
          <Route path="/review">
            <ReviewForm
              books={this.state.books}
              replaceBook={this.replaceBook}
            />
          </Route>

          <Switch>

            {/* BOOK CONTAINER */}
            <BookContainer
              books={filteredBook}
              deleteBookFromArray={this.deleteBookFromArray}
            />

          </Switch>



        </div>
      </>
    );

  }
}

export default App;
