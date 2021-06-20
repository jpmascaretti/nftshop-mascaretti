import React from "react";
import { Switch, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const RouteComponent = () => {
  return (
    <div>
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
          <ShoppingCart/>
        </Route>
      </Switch>
    </div>
  );
};

export default RouteComponent;
