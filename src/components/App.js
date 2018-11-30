import React from 'react'
import booksApi from '../api/booksApi'
import SearchBar from './SearchBar'
import BookList from './BookList'
import Cart from './Cart'

class App extends React.Component {

        state = { books: [], cart: [], allBooks: [] }


    async componentDidMount() {
       const response =  await booksApi.get('/books')

       this.setState({ books: response.data, allBooks: response.data })
    }

    onCartAdd = (item) => {
        this.setState((prevState) => ({ 
            ...prevState,
            cart: prevState.cart.concat(item)
        }))
    }

    onSearchSubmit = (term) => {
        if(term === '') {
            this.setState((prevState) => ({
                ...prevState,
                books: this.state.allBooks
            }))
        }
        
        this.setState((prevState) => ({
            ...prevState,
            books: prevState.books.filter(book => {
                return (book.title.toUpperCase().includes(term.toUpperCase()) || book.author.toUpperCase().includes(term.toUpperCase()))
            })
        }))
    }

    render() {
        return (
            <div className="ui container" >
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui two column grid" >
                    <div className="row">
                        <div className="column twelve wide">
                            <BookList books={this.state.books} onAddClick={this.onCartAdd} />
                        </div>
                        <div className="column four wide">
                            <Cart items={this.state.cart} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App