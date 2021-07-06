import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, Redirect } from "react-router-dom";
import { db } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = db.collection("nftproducts");
    const item = itemCollection.doc(id);

    item.get().then((product) => {
      setSingleProduct({ id: product.id, ...product.data() });
    });
  }, [id]);

  return id > 0 && id < 8 ? (
    <ItemDetail item={singleProduct} />
  ) : (
    <Redirect to="/" />
  );
};

export default ItemDetailContainer;
