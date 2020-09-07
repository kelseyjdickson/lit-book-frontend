import React from 'react';
import './App.css';
import BookContainer from './BookContainer'

class App extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then((booksArr)=>{
      this.setState({
        reviews: booksArr
      })
    })
  }
  render(){
  return (
    <div className="App">
   <BookContainer reviews={this.state.reviews}/>
    </div>
  );
}
}

export default App;
