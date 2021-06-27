import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../CartContext/CartContext";

const CartPurchaseButtons = ({ cancelPurchase, item, quantityAdded }) => {
  const routeHistory = useHistory();
  const {removeCartItem} = useContext(ModeContext);

  return (
    <div className="button__container--center">
      <button
        className="button__purchase"
        onClick={(e) => {
          routeHistory.push("/cart");
        }}
      >
        Finish Purchase
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
