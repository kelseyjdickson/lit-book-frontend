import React from 'react'




class BookCard extends React.Component {

    handleDelete = (evt) => {
        console.log("hi", this.props.book.id);
        //delete a book using fetch
        fetch(`http://localhost:3000/books/${this.props.book.id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then((deletedBook) => {
                //send up the id to app comp
                this.props.deleteBookFromArray(deletedBook.id)

            })

    }

    render() {
        let rating = this.props.reviews.map((rate) => {
            return <li key={rate.rating}className="li-font">{`${rate.review} | ${rate.rating}`} </li>
        })

        let { book_title, author, genre, book_img, description } = this.props.book

    return (
            <>
                <div className="container-cards">
                    <div className="ui centered cards">
                        <div className="ui grid">
                            <div className="column">
                                <div className="ui card" >
                                    <div className="image">
                                        <img src={book_img} alt="bookcover" />
                                    </div>

                                    <div className="content" style={{
                                        height: "580px"
                                    }}>

                                        <p className="book-title ">{book_title}</p>
                                        <div className="meta">
                                            <span className="author">{author}</span></div>
                                        <div className="description">{description}</div>
                                        <div className="genre">{genre}</div>
                                        <ul className="rating">{rating}</ul>
                                     </div>


                                    <div className="extra content" id="delete">
                                        <a href="delete"onClick={this.handleDelete} >
                                            <i className="book icon" id="delete"></i>Delete Lit Book!</a>
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