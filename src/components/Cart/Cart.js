import React, {useContext} from 'react'
import { ModeContext } from '../CartContext/CartContext'
import './Cart.css'

const Cart = () => {
    const {cartState} = useContext(ModeContext)

    return (
        <ul>
        {cartState.forEach(element => {
            
        })((element, i) => {
            if (typeof(element)==='object') {
                return <li key={i}>Item: </li>
            }
            // <li key={i} properties={element} />
        })}
        </ul>
    )
}

export default Cart
