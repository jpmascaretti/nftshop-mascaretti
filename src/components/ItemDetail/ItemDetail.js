import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useHistory } from "react-router-dom";
import "../ItemCount/ItemCount.css";
import "./ItemDetail.css";

const CustomButtonContainer = ({
  component: CartActionButton,
  add,
  cancel,
}) => {
  if (CartActionButton === ItemCount) {
    return <CartActionButton stock={5} initial={1} addToCart={add} />;
  } else {
    return <CartActionButton cancelPurchase={cancel} />;
  }
};

const CartPurchaseButtons = ({ cancelPurchase }) => {
  const routeHistory = useHistory();

  return (
    <div className="button__container--center">
      <button
        className="button__purchase"
        onClick={(e) => routeHistory.push("/cart")}
      >
        Finish Purchase
      </button>
      <button className="button__cancel" onClick={cancelPurchase}>
        Cancel
      </button>
    </div>
  );
};

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  function addToCart() {
    setAddedToCart(true);
  }

  function cancelCart() {
    setAddedToCart(false);
  }

  return (
    <Card className="card__position--top">
      <Card.Body>
        <Card.Text className="card__title">{item.title}</Card.Text>
        <div className="card__image--size">
          <Card.Img
            className="card__image"
            variant="top"
            src={item.pictureUrl}
          />
        </div>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.detailedDescription}</Card.Text>
        <Card.Text>ID#{item.id}</Card.Text>
        <Card.Text>
          {item.price}.000 ETH = ${Math.round(2237.88 * item.price).toFixed(2)}{" "}
          USD
        </Card.Text>
        <Card.Footer className="card__footer--background">
          <CustomButtonContainer
            component={addedToCart ? CartPurchaseButtons : ItemCount}
            add={addToCart}
            cancel={cancelCart}
          />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
