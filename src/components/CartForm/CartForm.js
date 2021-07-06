import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { ModeContext } from "../Context/CartContext/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../../firebase/firebase";

const CartForm = () => {
  const { cartState, setCartState } = useContext(ModeContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [stockItemsIds, setStockItemsIds] = useState([]);

  const orders = db.collection("orders");
  const routeHistory = useHistory();

  useEffect(() => {
    const itemsArray = cartState
      .map((nftcard) => nftcard.id)
      .filter((values) => values !== undefined);
    const singleItemIndexes = [...new Set(itemsArray)];
    setStockItemsIds(singleItemIndexes);
  }, [cartState]);

  function userEmailHandler(event) {
    setUserEmail(event.target.value);
  }

  function userNameHandler(event) {
    setUserName(event.target.value);
  }

  function userPhoneHandler(event) {
    setUserPhone(event.target.value);
  }

  function updateStock() {
    const itemsToUpdate = db
      .collection("nftproducts")
      .where(firebase.firestore.FieldPath.documentId(), "in", stockItemsIds);

    itemsToUpdate.get().then((querySnapshot) => {
      const batch = db.batch();
      const outOfStock = [];
      querySnapshot.docs.forEach((documentSnapshot, docIndex) => {
        const stockQuantity =
          cartState[
            cartState
              .map(function (e) {
                return e.title;
              })
              .indexOf(documentSnapshot.data().title) + 1
          ];
        if (documentSnapshot.data().stock >= stockQuantity) {
          batch.update(documentSnapshot.ref, {
            stock: documentSnapshot.data().stock - stockQuantity,
          });
        } else {
          outOfStock.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        }
      });
      if (outOfStock.length === 0) {
        batch.commit();
      }
    });
  }

  const order = {
    buyer: { name: userName, email: userEmail, phone: userPhone },
    items: [...cartState],
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  function addOrder() {
    orders
      .add(order)
      .then(({ id }) => {
        updateStock();
        setCartState([]);
        routeHistory.push(`/order/${id}`);
      })
      .catch((err) => {
        console.log(err);
        console.log("An error occured when processing order");
      });
  }

  return (
    <Form className="form__width">
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          value={userName}
          onChange={(nameEvent) => userNameHandler(nameEvent)}
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={userEmail}
          onChange={(emailEvent) => userEmailHandler(emailEvent)}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Your email will be kept private
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="phone"
          value={userPhone}
          onChange={(phoneEvent) => userPhoneHandler(phoneEvent)}
          placeholder="Phone"
        />
      </Form.Group>
      <Button
        className="form__btn"
        variant="primary"
        onClick={() => {
          addOrder();
        }}
      >
        Confirm Purchase
      </Button>
      <div className="form__bottom-div"></div>
    </Form>
  );
};

export default CartForm;
