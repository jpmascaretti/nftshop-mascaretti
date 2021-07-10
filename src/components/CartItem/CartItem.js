import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./CartItem.css";
import { ModeContext } from "../../context/CartContext/CartContext";

const CartItem = ({ element, cartState }) => {
  const { removeItemFromCart } = useContext(ModeContext);

  return (
    <Card className="card-group" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={element.pictureUrl} />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <ul className="unordered_list-cart">
          <li>Price: {element.price}.000 ETH</li>
          <li>Quantity: x {cartState[cartState.indexOf(element) + 1]}</li>
          <br></br>
          <li className="item__total">
            Total: {element.price * cartState[cartState.indexOf(element) + 1]}
            .000 ETH
          </li>
        </ul>
        <br></br>
        <br></br>
        <Button variant="danger" onClick={() => removeItemFromCart(element)}>
          Remove From Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
