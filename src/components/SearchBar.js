import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {

    state = { term: '' }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="ui search">
                    <div className="ui icon input">
                        <input 
                            className="prompt" 
                            type="text" 
                            placeholder="Find Books..." 
                            value={this.state.term}
                            onChange={ (e) => this.setState({ term: e.target.value }) }
                        />
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar