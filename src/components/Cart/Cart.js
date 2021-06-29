import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { CardGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./Cart.css";

const Cart = () => {
  const { cartState} = useContext(ModeContext);

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
      <h1 className="cart__noitems--header" >Your Cart is Empty</h1>
      <Button variant="primary" onClick={(e) => routeHistory.push("/")}>Back to NFT Shop</Button>
    </div>
  ) : (
    <React.Fragment>
    <CardGroup className="card-group">
      {cartState.map((element, i) =>
        typeof element === "object" ? (
          <div key={i}>
            <CartItem element={element} cartState={cartState} />
          </div>
        ) : null
      )}
    </CardGroup>
    <div className="grand__total--font"> Grand Total: {cartSummative}.000 ETH = $ {cartSummative*2127.96} USD</div>
    </React.Fragment>

  );
};

export default Cart;
