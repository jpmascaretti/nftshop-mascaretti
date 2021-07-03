import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams, Redirect } from "react-router-dom";
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
    console.log(typeof(categoryId))
  }, [categoryId]);


  if (categoryId === undefined) {
    return <ItemList items={products} />;
  } else if (categoryId === "common" || categoryId === "rare" || categoryId === "epic" || categoryId === "legendary" ) {
    return <ItemList items={products} />;
  } else {
    return <Redirect to="/"/>
  }


};

export default ItemListContainer;
