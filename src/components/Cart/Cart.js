import React, { useContext } from "react";
import { ModeContext } from "../CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartState } = useContext(ModeContext);

  return (
    <div>
      {cartState.map((element, i) => 
        typeof element === "object" ? (
        <ul>
          <li key={i}>{element.title} </li>
          <li>Price: {element.price}.000 ETH</li>
          <li>Quantity: {cartState[cartState.indexOf(element) + 1]}</li>
          <li>Total: {element.price * cartState[cartState.indexOf(element) + 1]}.000 ETH</li>
        </ul>
        ) : null
      )}
      <div>
        
      </div>
    </div>
  );
};

export default Cart;
