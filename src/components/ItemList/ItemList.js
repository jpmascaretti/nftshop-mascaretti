import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { CardColumns } from "react-bootstrap";

const ItemList = ({items}) => {

  return (
    <CardColumns className="card__grid--layout">
      {items.map((element, i) => (
          <Item key={i} properties={element} />
      ))}
    </CardColumns>
  );
};

export default ItemList;
