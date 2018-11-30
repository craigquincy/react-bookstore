import React from 'react'
import BookCard from './BookCard'
import './BookList.css'

const BookList = (props) => {
    const listOfBooks = props.books.map((book) => {
        return (
        <BookCard key={book.id} book={book} onAddClick={props.onAddClick} />
        )
    })

    return (
        <div className="ui cards book-list" >{listOfBooks}</div>
    )
}

export default BookList