import React, { useEffect, useState, createContext } from "react";

export const ModeContext = createContext();

const CartContext = (props) => {
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  return (
    <ModeContext.Provider value={[cartState, setCartState]}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default CartContext;
