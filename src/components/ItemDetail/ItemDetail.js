import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/ItemCount.css";
import "./ItemDetail.css";
import CartPurchaseButtons from "../CartPurchaseButtons/CartPurchaseButtons";

const CustomButtonContainer = ({
  component: CartActionButton,
  addToCart,
  cancel,
  item,
  setQtyAdded,
  quantityAdded,
}) => {
  if (CartActionButton === ItemCount) {
    return (
      <CartActionButton
        stock={5}
        initial={1}
        addToCart={addToCart}
        item={item}
        setQtyAdded={setQtyAdded}
      />
    );
  } else {
    return (
      <CartActionButton
        cancelPurchase={cancel}
        item={item}
        quantityAdded={quantityAdded}
      />
    );
  }
};

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [qtyAdded, setQtyAdded] = useState(0);

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
            addToCart={addToCart}
            cancel={cancelCart}
            item={item}
            setQtyAdded={setQtyAdded}
            quantityAdded={qtyAdded}
          />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
