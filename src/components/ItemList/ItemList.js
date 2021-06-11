import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { CardColumns } from "react-bootstrap";

const ItemList = ({ items }) => {
  const [info, setData] = useState([]);

  useEffect(() => {
    items.then((data) => setData(data));
  }, [items]);

  return (
    <CardColumns className="card__grid--layout">
      {info.map((element, i) => (
        <React.Fragment>
          <Item key={i} properties={element} />
        </React.Fragment>
      ))}
    </CardColumns>
  );
};

export default ItemList;
