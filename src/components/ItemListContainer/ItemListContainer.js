import React, {useEffect, useState} from "react";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css";
import {nftItems} from '../Products/products';
// import { useParams } from "react-router-dom";


const getProducts = (() => {
  const itemPromise = new Promise((resolve, reject) => {
    
    setTimeout(resolve(nftItems), 2000)
  }
  );
  return itemPromise
  })

const ItemListContainer = (props) => {

  const [itemsFromPromise, setData] = useState([]);
  // const {id} = useParams()

  useEffect(() => {
    getProducts().then(product => {
      setData(product)
  } )
  }, []);
    
  // const filterByCategory = itemsFromPromise => itemsFromPromise.filter(nftItem => nftItem.category === di);

  return (
    
    <ItemList items={itemsFromPromise}/>
  );


};

export default ItemListContainer;
