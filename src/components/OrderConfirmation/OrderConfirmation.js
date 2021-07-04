import React from "react";
import { useParams, useHistory} from "react-router-dom";
import { Button } from "react-bootstrap";
import './OrderConfirmation.css'

const OrderConfirmation = () => {
  const { orderId } = useParams();

  console.log(orderId)
  const routeHistory = useHistory();

  return (
    <div className="order__confirmation--flex">
      <h1>Your order has been confirmed</h1>
      <h3>Order ID: {orderId}</h3>
      <br></br>
      <Button variant="primary" onClick={(e) => routeHistory.push("/")}>
        Back to NFT Shop
      </Button>
    </div>
  );
};

export default OrderConfirmation;
