import React from 'react'




class BookCard extends React.Component{
    
    handleDelete = (evt) => {
        console.log("hi",this.props.book.id);
        //delete a book using fetch
        fetch(`http://localhost:3000/books/${this.props.book.id}`,{
            method: "DELETE",
            })
            .then(res => res.json())
            .then((deletedBook) => {
                //send up the id to app comp
                this.props.deleteBookFromArray(deletedBook.id)

            })

    }
  
    
  
    
    
    
    render(){
       
        

        let rating = this.props.reviews.map((rate) => {
            return <li >{`${rate.review} | ${rate.rating}` } </li>
        })

        let review = this.props.reviews.map((review) => {
            return review.review
        })
        
        // let {review} = this.props.reviews


   
  let { book_title, author, genre, book_img, description} = this.props.book
   





    return (
<>
        
        


   <div class="container-cards">
    
        <div class="ui centered cards">

        <div class="ui grid">
        <div class="column">
            <div class="ui card" >
                <div class="image">
                 <img src={book_img} alt="bookcover"/>
             </div>
            
            <div class="content" style={{
        height: "580px"}}>
           
                    <a class="header">{book_title}</a>
                    <div class="meta">
                    <span class="author">{author}</span></div>
                    <div class="description">{description}</div>
                    <div class="genre">{genre}</div>
                      <ul class="rating">{rating}</ul> 
                       
                   
                </div>
             
             
             <div class="extra content" id="delete">
                <a onClick={this.handleDelete}>
                <i class="book icon"id="delete"></i>Delete Lit Book!</a>
            </div>
          </div>
       </div>
       </div>
       </div>
        </div> 
           
       </>

          
         
  
         
       
       
    
     )
}
}




export default BookCard