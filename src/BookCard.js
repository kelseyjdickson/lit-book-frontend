import React from 'react'
import habit from './images/habit.jpg'





const BookCard = (props) => {



    return (
        <>
        <h1>BookCard</h1>
        <h3>Book Name</h3>
        <h4>Genre</h4>
        <h4>Rating</h4>
        <h4>Description</h4>
        <h4>Reviews</h4>


        <img src= {habit} alt="the power of habit book"/>
</>
     
    
        

    )
}




export default BookCard