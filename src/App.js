import React from 'react';
import './App.css';
import BookContainer from './BookContainer'
import Search from './Search'
import AddBookForm from './AddBookForm';


class App extends React.Component {
  state = {
  
    books: [],
    searchTerm:''
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then((booksArr)=>{
      this.setState({
       
        books: booksArr
      })
    })
  }

  changeSearchTerm = (theSearchedInput) => {
    this.setState({
      searchTerm: theSearchedInput

    })
  }

  addBook = newBook => {
    let arrOfBooks = [...this.state.books,newBook]
    this.setState({
     
      books: arrOfBooks
    })
  }

  deleteBookFromArray = (idFromChild) => {
    let copyOfBooks = this.state.books.filter((book) => {
      return book.id !== idFromChild
    })
    this.setState({
       books: copyOfBooks
    })
    
  }
  render(){
    // let filteredBook = this.state.books.filter((bookObject) => {
      
    //   return bookObject.rating.includes(this.state.searchTerm)
    // })

  return (
    <div className="App">
   
   
  <BookContainer 
    books={this.state.books}
    deleteBookFromArray={this.deleteBookFromArray}
   />
   <AddBookForm addBook={this.addBook}/>
   
   <Search
     searchTerm={this.state.searchTerm}
     changeSearchTerm={this.changeSearchTerm}/>
    </div>
  );
}
}

export default App;
