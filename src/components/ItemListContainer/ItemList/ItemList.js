import React from "react";
import Item from "../ItemList/Item/Item";
import "./ItemList.css";
import { CardColumns } from "react-bootstrap";

const ItemList = ({ items}) => {

  return (
    <CardColumns className="card__grid--layout">
      {items.map((element, i) => (
        <React.Fragment>
          <Item key={i} properties={element} />
        </React.Fragment>
      ))}
    </CardColumns>
  );
};

export default ItemList;
