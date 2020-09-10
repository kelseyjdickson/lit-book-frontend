import React from 'react'




import './App.css'




class AddBookForm extends React.Component {

    state = {
        book_title: "",
        author: "",
        genre: "",
        book_img: "",
        description: "",
        

    }

    handleAllInputs = evt => {
       
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
       
        evt.preventDefault()
        
        
        let structuredBackend = {
            book_title: this.state.book_title,
            author: this.state.author,
            genre: this.state.genre,
            book_img: this.state.book_img,
            description: this.state.description,
           
            
            
        }
        fetch('http://localhost:3000/books', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(structuredBackend)
        })
        .then(res => res.json())
        .then((newlyCreatedBook) => {
            console.log('newlycreate',newlyCreatedBook)
           this.props.addBook(newlyCreatedBook)
        })
        

    }

    render(){
        

    return (
        <>
        <h1 class="lit">Add a Lit Book! </h1>
        <form class="form"onSubmit={this.handleSubmit}>
             <label>Book Title:<input type="text" name="book_title"value={this.state.book_title} onChange={this.handleAllInputs} /></label>
             <label>Author:<input type="text" name="author" value={this.state.author} onChange={this.handleAllInputs}/></label>
             <label>Genre:<input type="text" name="genre" value={this.state.genre} onChange={this.handleAllInputs}/></label>
             <label>Book Image:<input type="text" name="book_img" value={this.state.book_img} onChange={this.handleAllInputs}/></label>
             <label>Description:<input type="text" name="description" value={this.state.description} onChange={this.handleAllInputs} /></label>
             <input class="button"type="submit" value="Add Lit Book"/>
        </form>
        
  </>
  

        

    )
}
}



export default AddBookForm