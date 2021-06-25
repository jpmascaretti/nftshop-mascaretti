import React, {useEffect, useState, createContext} from 'react'

export const ModeContext = createContext();

//I can add any remove, change, query, function here

const CartContext = props => {

    const [cartState, setCartState] = useState([]);

    useEffect(() => {
        console.log(cartState)
    }, [cartState])

    return (
        <ModeContext.Provider value={[cartState, setCartState]}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default CartContext
