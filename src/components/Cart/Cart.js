import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ModeContext } from "../../context/CartContext/CartContext";
import { Carousel, Button } from "react-bootstrap";
import CartForm from "../CartForm/CartForm";
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
      <h1 className="cart__noitems--header">Your Cart is Empty</h1>
      <Button variant="primary" onClick={(e) => routeHistory.push("/")}>
        Back to NFT Shop
      </Button>
    </div>
  ) : (
    <React.Fragment>
      <div className="form__top-div"></div>
      <div className="carousel__div">
        <Carousel>
          {cartState.map((element, i) =>
            typeof element === "object" ? (
              <Carousel.Item key={i} className="carousel-here">
                <div className="carousel__image--div">
                  <img
                    className="carousel__image"
                    src={element.pictureUrl}
                    alt="Cart Item"
                  />
                </div>
                <Carousel.Caption>
                  <h3 className="carousel__font">{element.title}</h3>
                  <ul className="unordered_list-cart">
                    <li className="carousel__font">
                      Price: {element.price}.000 ETH
                    </li>
                    <li className="carousel__font">
                      Quantity: x {cartState[cartState.indexOf(element) + 1]}
                    </li>
                    <br></br>
                    <li className="item__total carousel__font">
                      Total:{" "}
                      {element.price *
                        cartState[cartState.indexOf(element) + 1]}
                      .000 ETH
                    </li>
                  </ul>
                <Button
                  variant="danger"
                  onClick={() => removeItemFromCart(element)}
                >
                  Remove From Cart
                </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ) : 
            null
          )}
        </Carousel>
      </div>
      <div className="grand__total--font">
        {" "}
        Grand Total: {cartSummative}.000 ETH = $ {cartSummative * 2127.96} USD
      </div>
      <div className="form__middle-div"></div>
      <div className="form__div--width">
        <CartForm />
      </div>
    </React.Fragment>
  );
};

export default Cart;
