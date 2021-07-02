import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from "react-router-dom";
import {db} from '../../firebase/firebase';


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = db.collection("nftproducts");
    const item = itemCollection.doc(id);

    item.get().then((product) => {
          setSingleProduct({id: product.id, ...product.data()});
    })
    //Need to add case when no items exist /id/9 or something
  }, [id]);

  return <ItemDetail item={singleProduct}/>;
};

export default ItemDetailContainer;
