import React, { useContext, useState, useEffect } from "react";
import { Cart3 } from "react-bootstrap-icons";
import { ModeContext } from "../../../context/CartContext/CartContext";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cartState } = useContext(ModeContext);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  useEffect(() => {
    let cartQuantity = 0;

    cartState.forEach((cartItem) => {
      if (typeof cartItem !== "object") {
        cartQuantity = cartQuantity + cartItem;
      }
      setCartTotalQuantity(cartQuantity);
    });
  }, [cartState]);

  return (
    <Link to="/cart">
      <Cart3 id="cart__style" />
      <span id="dot">
        <p
          id={cartTotalQuantity < 10 ? "dot__number" : "dot__number--twodigits"}
        >
          {cartTotalQuantity}
        </p>
      </span>
    </Link>
  );
}

export default CartWidget;

