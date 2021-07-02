import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { nftItems } from "../../products/products";
import { useParams } from "react-router-dom";
import { dataBase } from '../../firebase/firebase'

const getProducts = () => {
  const itemPromise = new Promise((resolve, reject) => {
    setTimeout(resolve(nftItems), 2000);
  });
  return itemPromise;
};

const ItemListContainer = (props) => {
  const [itemsFromPromise, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((product) => {
      if (categoryId === undefined) {
        setData(product);
      } else {
        setData(product.filter((nftItem) => nftItem.category === categoryId));
      }
    });
  }, [categoryId]);

  return <ItemList items={itemsFromPromise} />;
};

export default ItemListContainer;
