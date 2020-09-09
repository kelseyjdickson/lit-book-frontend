import React from 'react'


class ReviewForm extends React.Component {

    state = {
        review:"",
        rating:"",
        book_id:""
    }

    handleAllInputs = (evt) => {
        
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault()
        console.log('REVIEW FORM',this.state)
        //fetch Post/reviews---Create controller render json: review.book
        let structuredBackend = {
        //body of request // hardcode user id
        review:this.state.review,
        rating:this.state.rating,
        book_id:this.state.book_id,
        user_id: 7
        } 
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(structuredBackend)
        })
        .then(res => res.json())
        .then((reviewedBook) => {
            this.props.replaceBook(reviewedBook)
        })
    }


    render(){
        let options =  this.props.books.map((booksObj) => {
            return (<option key={booksObj.id}value={booksObj.id}> {booksObj.book_title}</option>)
        })
        return(
        <>


        
        <form onSubmit={this.handleSubmit}>Rating 
             <label>Review:</label><input type="text" name="review"value={this.state.review} onChange={this.handleAllInputs} />
             <label>Rating:</label><input type="text" name="rating"value={this.state.rating} onChange={this.handleAllInputs} />
             <label>Book:</label>
             <select name="book_id"value={this.state.book_id}onChange={this.handleAllInputs}>

                    {options}
             </select>
             <input type="submit" value="Add Review"/>
              
        </form>

    
        </>
        )
    }
}

export default ReviewForm