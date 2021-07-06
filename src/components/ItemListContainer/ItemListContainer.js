import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams, Redirect } from "react-router-dom";
import { db } from "../../firebase/firebase";
import CategorySpinner from "../CategorySpinner/CategorySpinner"

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const itemCollection = db.collection("nftproducts");
    setLoading(true);

    if (categoryId === undefined) {
      itemCollection.get().then((productQuery) => {
        setProducts(
          productQuery.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }).then(() => setLoading(false))
    } else {
      const categoryItems = itemCollection.where("category", "==", `${categoryId}`);
      categoryItems.get().then((productQuery) => {
        setProducts(
          productQuery.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }).then(() => setLoading(false))
    } 

  }, [categoryId]);

  if (categoryId === undefined) {
    return loading ? <CategorySpinner/> : <ItemList items={products} />;
  } else if (
    categoryId === "common" ||
    categoryId === "rare" ||
    categoryId === "epic" ||
    categoryId === "legendary"
  ) {
    return loading === true ? <CategorySpinner/> : <ItemList items={products} />;

  } else {
    return <Redirect to="/" />;
  }
};

export default ItemListContainer;
