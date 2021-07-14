import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { ModeContext } from "../../context/CartContext/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../../firebase/firebase";
import {validName, validEmail, validPhone} from '../../regexp/RegExp'
import './CartForm.css'

const CartForm = () => {
  const { cartState, setCartState } = useContext(ModeContext);
  const [stockItemsIds, setStockItemsIds] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const itemsArray = cartState
      .map((nftcard) => nftcard.id)
      .filter((values) => values !== undefined);
    const singleItemIndexes = [...new Set(itemsArray)];
    setStockItemsIds(singleItemIndexes);
  }, [cartState]);

  console.log(userInfo.name)
  console.log(validName.test(userInfo.name))
  const orders = db.collection("orders");
  const routeHistory = useHistory();

  function infoHandler(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
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

  function addOrder() {
    const order = {
      buyer: { ...userInfo },
      items: [...cartState],
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

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
          name="name"
          value={userInfo.name}
          onChange={infoHandler}
          placeholder="Name"
        />
        { validName.test(userInfo.name) ? null : <Form.Text className="invalid__text">
          Invalid Name!
        </Form.Text> }
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={userInfo.email}
          onChange={infoHandler}
          placeholder="Enter email"
        />      
        { validEmail.test(userInfo.email) ? <Form.Text className="valid__text">
          Your email is valid!
        </Form.Text> : <Form.Text className="text-muted">
          Make sure you type email@email.whatever
        </Form.Text> }

      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="phone"
          name="phone"
          value={userInfo.phone}
          onChange={infoHandler}
          placeholder="Phone"
        />
        { validPhone.test(userInfo.phone) || userInfo.phone === "" ? null : <Form.Text className="invalid__text">
          Your phone number is invalid!
        </Form.Text>}
      </Form.Group>
      <Button
        className="form__btn"
        variant="primary"
        onClick={() => {
          addOrder();
        }}
        disabled = {!validPhone.test(userInfo.phone) || !validEmail.test(userInfo.email) || !validName.test(userInfo.name)}
      >
        Confirm Purchase
      </Button>
      <div className="form__bottom-div"></div>
    </Form>
  );
};

export default CartForm;
