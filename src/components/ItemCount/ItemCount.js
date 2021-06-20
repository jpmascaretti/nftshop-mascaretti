import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, addToCart }) => {
  const [count, setCount] = useState(initial);
  // console.log(addToCart)
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
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
