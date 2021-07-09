import React, { useState, createContext } from "react";

export const ModeContext = createContext();

const CartContext = (props) => {
  const [cartState, setCartState] = useState([]);

  function removeCartItem(itemForRemoval, qtyToBeRemoved) {
    if (cartState.includes(itemForRemoval)) {
      const currentQty = cartState[cartState.indexOf(itemForRemoval) + 1];
      const cancellationQty = currentQty - qtyToBeRemoved;
      if (cancellationQty > 0) {
        const updatedCartQty = [...cartState];
        updatedCartQty[cartState.indexOf(itemForRemoval) + 1] = cancellationQty;
        setCartState([...updatedCartQty]);
      } else {
        const cartWithRemovedItem = [...cartState];
        cartWithRemovedItem.splice(
          cartWithRemovedItem.indexOf(itemForRemoval),
          2
        );
        setCartState([...cartWithRemovedItem]);
      }
    }
  }
    function addItemToCart(cartItem, quantity, stock) {

      const item = cartState.find(x => x.id === cartItem.id)
      console.log(item)
      if (
        !item &&
        cartState[cartState.indexOf(item) + 1] !== quantity
      ) {
        setCartState([...cartState, cartItem, quantity]);
      } else if (typeof(item) === "object") {
        quantity = cartState[cartState.indexOf(item) + 1] + quantity;
        if (quantity <= stock) {
          const updatedCart = [...cartState];
          console.log("qUANITTY")
          console.log(updatedCart[cartState.indexOf(item) + 1])
          updatedCart[cartState.indexOf(item) + 1] = quantity;
          setCartState([...updatedCart]);
        }
      }
    }



  function removeItemFromCart(cartItemToRemove) {
    const cartItemDeleted = [...cartState];
    cartItemDeleted.splice(cartItemDeleted.indexOf(cartItemToRemove), 2);
    setCartState([...cartItemDeleted]);
  }


  return (
    <ModeContext.Provider
      value={{
        removeCartItem,
        addItemToCart,
        removeItemFromCart,
        setCartState,
        cartState,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};

export default CartContext;
