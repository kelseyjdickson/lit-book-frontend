import React from 'react';
import './App.css';
import BookContainer from './BookContainer'
import SearchPage from './SearchPage';
import AddBookForm from './AddBookForm';
import Header from './Header';
//  import MenuExampleVerticalPointing from './MenuExampleVerticalPointing'
import ReviewForm from './ReviewForm';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'



class App extends React.Component {
  state = {
  
    books: [],
    searchTerm:'',
    username: ""
  
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
//ReviewForm callback function
  replaceBook = (updatedBook) => {
    let arrOfBooks = this.state.books.map((book) => {
     //NOT sure what to do here If statement
     if (book.id === updatedBook.id){
      return updatedBook
     } else {
       return book
     }
     

    })
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

  // LOGIN STUFF



  handleLoginSubmit = (userInfo) =>{
    console.log("Hi I was clicked")
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(this.handleResponse)
  }
  renderForm = (routerProps) => {
    if(routerProps.location.pathname === '/login'){
      return <Login handleSubmit={this.handleLoginSubmit} />
    }
  }




  render(){
    let filteredBook = this.state.books.filter((bookObject) => {
      
       return bookObject.book_title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

  return (
    <>
    <div class="App">
  {/* NAV BAR */}
    <NavBar/>
    
    {/* SEARCH */}
    <SearchPage
      searchTerm={this.state.searchTerm}
      changeSearchTerm={this.changeSearchTerm}/>
      <Header />
      {/* LOGIN */}
      <Route path="/login" component={Login} render={this.renderForm}
      handleSubmit={this.handleLoginSubmit}/>
     
     {/* ADD FORM */}
    
    <Route path="/form">
      <AddBookForm addBook={this.addBook}/>
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
