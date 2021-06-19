import React, {useState, useEffect} from 'react'
import ItemDetail from "./ItemDetail/ItemDetail";
import {nftItems} from '../Products/products';
import { useParams } from "react-router-dom";

const getItems = (() => {
    const singleProduct = new Promise((resolve, reject) => {
    
        setTimeout(resolve(nftItems), 2000)
    })
    return singleProduct
})


const ItemDetailContainer = () => {

    const[singleProd, setSingleProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getItems().then(product => {
            if (id === undefined) {
                setSingleProduct(product)
            } else {
                setSingleProduct(product.find(nftItem => nftItem.id === parseInt(id)))

            }
        } )
    },[id])

    console.log(typeof(id))

    return (
        <ItemDetail item={singleProd}/>
    )
}

export default ItemDetailContainer
