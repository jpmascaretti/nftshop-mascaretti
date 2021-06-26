import React, { useState, useContext } from "react";
import "./ItemCount.css";
import { ModeContext } from "../CartContext/CartContext";

const ItemCount = ({ stock, initial, addToCart, item, setQtyAdded }) => {
  const [count, setCount] = useState(initial);
  const [cartState, setCartState] = useContext(ModeContext);

  function addItemToCart(cartItem, quantity) {
    if (
      !cartState.includes(cartItem) &&
      cartState[cartState.indexOf(cartItem) + 1] !== quantity
    ) {
      setCartState([...cartState, cartItem, quantity]);
    } else if (cartState.includes(cartItem)) {
      quantity = cartState[cartState.indexOf(cartItem) + 1] + quantity;
      if (quantity <= stock) {
        const updatedCart = cartState;
        updatedCart[cartState.indexOf(cartItem) + 1] = quantity;
        setCartState([...updatedCart]);
      }
    }
  }

  return (
    <>
      <div className="button__wrapper">
        <button
          className={
            count > 0 && count <= stock
              ? "button__count"
              : "button__count--disabled"
          }
          disabled={count < initial}
          onClick={() => count > 0 && setCount(count - 1)}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          className={
            count < stock && count >= 0
              ? "button__count"
              : "button__count--disabled"
          }
          disabled={count >= stock}
          onClick={() => count < stock && setCount(count + 1)}
        >
          +
        </button>
      </div>
      <div className="button__wrapper--second">
        <button
          className={
            count > 0 && count <= stock
              ? "button__add-to-cart"
              : "button__add-to-cart--disabled"
          }
          disabled={count > 0 && count <= stock ? false : true}
          onClick={() => {
            addToCart();
            addItemToCart(item, count);
            setQtyAdded(count);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
