import React, { useContext, useState, useEffect } from "react";
import { Cart3 } from "react-bootstrap-icons";
import { ModeContext } from "../../CartContext/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { cartState } = useContext(ModeContext);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  useEffect(() => {
    let cartQuantity = 0;

    cartState.forEach((cartItem) => {
      if (typeof cartItem !== "object") {
        cartQuantity = cartQuantity + cartItem;
      }
      setCartTotalQuantity(cartQuantity );
    });
  }, [cartState]);

  //Note: need to add styling when number > 9 - easy conditional rendering with css class
  return (
    <a href="/cart">
      <Cart3 id="cart__style" />
      <span id="dot">
        <p id="dot_number">{cartTotalQuantity}</p>
      </span>
    </a>
  );
}

export default CartWidget;
