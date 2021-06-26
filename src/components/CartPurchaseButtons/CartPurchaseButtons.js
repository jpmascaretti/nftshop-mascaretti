import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../CartContext/CartContext";

const CartPurchaseButtons = ({ cancelPurchase, item, quantityAdded }) => {
  const routeHistory = useHistory();
  const [cartState, setCartState] = useContext(ModeContext);

  function removeCartItem(itemForRemoval, qtyToBeRemoved) {
    if (cartState.includes(itemForRemoval)) {
      const currentQty = cartState[cartState.indexOf(itemForRemoval) + 1];
      const cancellationQty = currentQty - qtyToBeRemoved;
      if (cancellationQty > 0) {
        const updatedCartQty = cartState;
        updatedCartQty[cartState.indexOf(itemForRemoval) + 1] = cancellationQty;
        setCartState([...updatedCartQty]);
      } else {
        const cartWithRemovedItem = cartState;
        cartWithRemovedItem.splice(
          cartWithRemovedItem.indexOf(itemForRemoval),
          2
        );
        setCartState([...cartWithRemovedItem]);
      }
    }
  }

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
