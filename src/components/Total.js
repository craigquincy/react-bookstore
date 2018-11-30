import React from 'react'

const calcTotal = (props) => {
    let sum = 0

    props.toCalc.forEach((item) => {
        sum += item.price
    })

    return (
        <div className="left floated author">Total: ${sum}</div>
    )
}

export default calcTotal