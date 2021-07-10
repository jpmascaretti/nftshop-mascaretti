import React, { useState, useContext } from "react";
import "./ItemCount.css";
import { ModeContext } from "../../context/CartContext/CartContext";
import { Button } from "react-bootstrap";

const ItemCount = ({ initial, addToCart, item, setQtyAdded }) => {
  const [count, setCount] = useState(initial);
  const { addItemToCart } = useContext(ModeContext);

  return (
    <>
      <div className="button__wrapper">
        <button
          className={
            count > 0 && count <= item.stock
              ? "button__count"
              : "button__count--disabled"
          }
          disabled={count <= initial}
          onClick={() => count > 0 && setCount(count - 1)}
        >
          -
        </button>
        <h1>{item.stock <= 0 ? 0 : count}</h1>
        <button
          className={
            count < item.stock && count >= 0
              ? "button__count"
              : "button__count--disabled"
          }
          disabled={count >= item.stock}
          onClick={() => count < item.stock && setCount(count + 1)}
        >
          +
        </button>
      </div>
      <div className="button__wrapper--second">
        <Button
          className={
            count > 0 && count <= item.stock
              ? "button__add-to-cart"
              : "button__add-to-cart--disabled"
          }
          disabled={count > 0 && count <= item.stock ? false : true}
          onClick={() => {
            addToCart();
            addItemToCart(item, count, item.stock);
            setQtyAdded(count);
          }}
        >
          {item.stock <= 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
