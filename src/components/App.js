import React from 'react'
import SearchBar from './SearchBar'
import BookListContainer from '../containers/BookListContainer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cart from './Cart'
import { getBooks } from '../actions'

class App extends React.Component {

    state = { books: [], cart: [], allBooks: [] }

    async componentDidMount() {
      // initial book load
      this.props.getBooks()
    }

    // onCartAdd = (item) => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //         cart: prevState.cart.concat(item)
    //     }))
    // }

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
                            <BookListContainer books={this.state.books} onAddClick={this.onCartAdd} />
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

const mapDispatchToProps = dispatch => bindActionCreators({ getBooks }, dispatch)

export default connect(null, mapDispatchToProps)(App);
