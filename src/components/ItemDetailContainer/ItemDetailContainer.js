import React, {useState, useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";

const getItems = (() => {
    const singleProduct = new Promise((resolve, reject) => {
        const nftProduct = {
            id: Math.floor(Math.random()*10000),
            title: "Lit Lamb",
            description: "Each collectible was orginially hand drawn by me. The main ambition of this project is to create meaningful intellectual property and create an extraordinary community. All tokens are a three-year admission token to NFTCon, an annual super-conference. We know a lot of you are new to the NFT world, so before you do anything, get acquainted with the FAQs.",
            price: 28.0000,
            pictureUrl: "https://i.ibb.co/0YfT4Pp/LitLamb.png",
        }
        setTimeout(resolve(nftProduct), 2000)
    })
    return singleProduct
})


const ItemDetailContainer = () => {

    const[singleProduct, setSingleProduct] = useState([])

    useEffect(() => {
        getItems().then(product => {
            setSingleProduct(product)
        } )
    },[])

    return (
        <ItemDetail item={singleProduct}/>
    )
}

export default ItemDetailContainer
