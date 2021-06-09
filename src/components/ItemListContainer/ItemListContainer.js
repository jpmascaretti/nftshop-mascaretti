import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const itemPromise = new Promise((resolve, reject) => {
    const nftItems = [
      [{
        id: "1",
        title: "Yolo Yak",
        price: 2.0000,
        pictureUrl: "../public/YoloYak.png",
      }],
      [{
        id: "2",
        title: "Perceptive Puma",
        price: 12.0000,
        pictureUrl: "../public/PerceptivePuma.png",
      }],
      [{
        id: "3",
        title: "Optimistic Otter",
        price: 3.0000,
        pictureUrl: "../public/OptimisticOtter.png",
      }],
      [{
        id: "4",
        title: "Moral Monkey",
        price: 5.0000,
        pictureUrl: "../public/MoralMonkey.png",
      }],
      [{
        id: "5",
        title: "Logical Lion",
        price: 11.0000,
        pictureUrl: "../public/LogicalLion.png",
      }],
      [{
        id: "6",
        title: "Lit Lamb",
        price: 28.0000,
        pictureUrl: "../public/LitLamb.png",
      }],
      [{
        id: "7",
        title: "Dialed In Dog",
        price: 6.0000,
        pictureUrl: "../public/DialedInDog.png",
      }],
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
