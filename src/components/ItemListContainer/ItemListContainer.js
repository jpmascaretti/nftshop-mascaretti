import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase'


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {

    const itemCollection = db.collection("nftproducts");
    itemCollection.get().then((productQuery) => {
      productQuery.docs.map(doc => ({id: doc.id, ...doc.data()}))
      if (categoryId === undefined) {
        setProducts(productQuery.docs.map(doc => ({id: doc.id, ...doc.data()})));
      } else {
        setProducts(productQuery.docs.map(doc => ({id: doc.id, ...doc.data()})).filter((nftItem) => nftItem.category === categoryId));
      }
    })
  }, [categoryId]);

  return <ItemList items={products} />;
};

export default ItemListContainer;
