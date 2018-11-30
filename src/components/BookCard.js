import React from 'react'

class BookCard extends React.Component {

    onAddCartClick = (event) => {
        // console.log(event.target.getAttribute("value"))
        // console.log(this.props)
        const { onAddClick } = this.props

        onAddClick(this.props.book)
    }


    render() {
        const { title, author, subtitle, description, price, id } = this.props.book
        return (
            <div className="ui raised card">
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">
                        <span className="category">{subtitle}</span>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">${price}</div>
                    <div className="left floated author">By: {author}</div>
                </div>
                <div className="ui bottom attached button" onClick={this.onAddCartClick} value={id} >
                    <i className="cart plus icon"></i>
                    Add to Cart
                </div>
            </div>
        )
    }
}

export default BookCard