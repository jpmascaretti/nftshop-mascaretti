import React from "react";
import { Cart3 } from "react-bootstrap-icons";
import "./CartWidget.css";

function CartWidget() {
  return (
    <>
      <a href="/cart">
        <Cart3 id="cart__style" />
        <span id="dot">
          <p id="dot_number">2</p>
        </span>
      </a>
    </>
  );
}

export default CartWidget;
