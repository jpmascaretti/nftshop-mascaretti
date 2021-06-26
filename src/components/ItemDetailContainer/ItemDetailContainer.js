import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { nftItems } from "../../nftproducts/products";
import { useParams } from "react-router-dom";

const getItems = () => {
  const singleProd = new Promise((resolve, reject) => {
    setTimeout(resolve(nftItems), 2000);
  });
  return singleProd;
};


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItems().then((product) => {
      if (id === undefined) {
        setSingleProduct(product);
      } else {
        setSingleProduct(
          product.find((nftItem) => nftItem.id === parseInt(id))
        );
      }
    });
  }, [id]);

  return <ItemDetail item={singleProduct}/>;
};

export default ItemDetailContainer;
