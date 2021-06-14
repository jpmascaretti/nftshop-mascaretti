import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import {nftItems} from '../products';


const getProducts = (() => {
  const itemPromise = new Promise((resolve, reject) => {
    
    setTimeout(resolve(nftItems), 2000)
  }
  );
  return itemPromise
  })

const ItemListContainer = (props) => {

  const [itemsFromPromise, setData] = useState([]);

  useEffect(() => {
    getProducts().then(product => {
      setData(product)
  } )
  }, []);
    /* Here goes ItemLists calling the const of items. Inside of ItemLists I map every item to Item */
    
  return (
    <ItemList items={itemsFromPromise} />
  );


};

export default ItemListContainer;
