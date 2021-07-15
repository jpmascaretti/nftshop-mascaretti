import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../../context/CartContext/CartContext";

const CartPurchaseButtons = ({ cancelPurchase, item, quantityAdded }) => {
  const routeHistory = useHistory();
  const { removeCartItem } = useContext(ModeContext);

  return (
    <div className="button__container--center">
      <button
        className="button__purchase"
        onClick={(e) => {
          routeHistory.push("/cart");
        }}
      >
        Go To Cart
      </button>
      <button
        className="button__cancel"
        onClick={() => {
          cancelPurchase();
          removeCartItem(item, quantityAdded);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default CartPurchaseButtons;

const a = 2