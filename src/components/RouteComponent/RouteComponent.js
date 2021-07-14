import React from "react";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import Cart from "../Cart/Cart";

const RouteComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route path="/category/:categoryId">
        <ItemListContainer />
      </Route>
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/order/:orderId">
        <OrderConfirmation />
      </Route>
    </Switch>
  );
};

export default RouteComponent;
