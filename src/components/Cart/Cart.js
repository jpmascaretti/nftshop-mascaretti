import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cartState, removeItemFromCart } = useContext(ModeContext);

  const routeHistory = useHistory();

  const [cartSummative, setCartGrandTotal] = useState(0);

  useEffect(() => {
    let cartGrandTotal = 0;

    cartState.forEach((cartItem) => {
      if (typeof cartItem === "object") {
        cartGrandTotal =
          cartGrandTotal +
          cartItem.price * cartState[cartState.indexOf(cartItem) + 1];
      }
      setCartGrandTotal(cartGrandTotal);
    });
  }, [cartState]);

  return cartState.length === 0 ? (
    <div className="cart__noitems">
      <h1>Your Cart is Empty</h1>
      <button onClick={(e) => routeHistory.push("/")}>Back to NFT Shop</button>
    </div>
  ) : (
    <div>
      {cartState.map((element, i) =>
        typeof element === "object" ? (
          <React.Fragment key={i}>
            <CartItem element={element} cartState={cartState} />
            <button onClick={() => removeItemFromCart(element)}>
              Remove Item
            </button>
          </React.Fragment>
        ) : null
      )}
      <div>Grand Total: {cartSummative}.000 ETH</div>
    </div>
  );
};

export default Cart;
