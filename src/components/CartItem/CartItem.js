import React from 'react'

const CartItem = ({element, cartState}) => {

    return (
        <ul>
          <li >{element.title} </li>
          <li>Price: {element.price}.000 ETH</li>
          <li>Quantity: {cartState[cartState.indexOf(element) + 1]}</li>
          <li>Total: {element.price * cartState[cartState.indexOf(element) + 1]}.000 ETH</li>
        </ul>

    )
}

export default CartItem
