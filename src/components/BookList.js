import React from 'react'
import BookCard from './BookCard'
import './BookList.css'

const BookList = ({books}) => {
    const listOfBooks = books.map((book) => {
        return (
        <BookCard key={book.id} book={book} />
        )
    })

    return (
        <div className="ui cards book-list" >{listOfBooks}</div>
    )
}

export default BookList
