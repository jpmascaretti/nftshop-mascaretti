import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const itemPromise = new Promise((resolve, reject) => {
    const nftItems = [
      {
        id: "1",
        title: "Yolo Yak",
        description: "This is a Yolo Yak collectible",
        price: 2.0000,
        pictureUrl: "YoloYak.png",
      },
      {
        id: "2",
        title: "Perceptive Puma",
        description: "This is a Perceptive Puma collectible",
        price: 12.0000,
        pictureUrl: "PerceptivePuma.png",
      },
      {
        id: "3",
        title: "Optimistic Otter",
        description: "This is an Optimistic Otter collectible",
        price: 3.0000,
        pictureUrl: "OptimisticOtter.png",
      },
      {
        id: "4",
        title: "Moral Monkey",
        description: "This is a Moral Monkey collectible",
        price: 5.0000,
        pictureUrl: "MoralMonkey.png",
      },
      {
        id: "5",
        title: "Logical Lion",
        description: "This is a Logical Lion collectible",
        price: 11.0000,
        pictureUrl: "LogicalLion.png",
      },
      {
        id: "6",
        title: "Lit Lamb",
        description: "This is a Lit Lamb collectible",
        price: 28.0000,
        pictureUrl: "LitLamb.png",
      },
      {
        id: "7",
        title: "Dialed In Dog",
        description: "This is a Dialed In Dog collectible",
        price: 6.0000,
        pictureUrl: "DialedInDog.png",
      }
    ];
    setTimeout(resolve(nftItems), 2000)
  }
  );
    /* Here goes ItemLists calling the const of items. Inside of ItemLists I map every item to Item */
    
  return (
    <ItemList items={itemPromise} />
  );


};

export default ItemListContainer;
