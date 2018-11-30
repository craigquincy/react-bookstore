import React from 'react'
import './Cart.css'
import CalcTotal from './Total'

class Cart extends React.Component {

    render() {
        return (
            <div className="ui card cart">
                <div className="content">
                    <div className="header">Your Cart</div>
                    <div className="description">
                        <ul>
                            {this.props.items.map((item) => {
                                return <li key={item.id} >{item.title}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="extra content">
                     <CalcTotal toCalc={this.props.items} /> 
                    <button className="ui right floated button">Checkout</button>
                </div>   
            </div>
        )
    }
}

export default Cart