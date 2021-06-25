import React from 'react'
import { useHistory } from "react-router-dom";

const CartPurchaseButtons = ({ cancelPurchase}) => {
    const routeHistory = useHistory();
    return (
      <div className="button__container--center">
        <button
          className="button__purchase"
          onClick={(e) => {
            routeHistory.push("/cart")}}
        >
          Finish Purchase
        </button>
        <button className="button__cancel" onClick={cancelPurchase}>
          Cancel
        </button>
      </div>
    );
  };

  export default CartPurchaseButtons