import React from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import "../ItemCount/ItemCount.css";
import "./Item.css";

const Item = ({properties}) => {
    console.log(properties.pictureUrl)
    function onAdd() {
        console.log("Added to Cart");
      }
    
    return (
    <Card style={{ width: '26rem' }} key={properties.id}>
        <Card.Img variant="top" src={properties.pictureUrl} />
        <Card.Body>
            <Card.Title>{properties.title}</Card.Title>
            <Card.Text>
            {properties.description}
            </Card.Text>
            <Card.Text>
            {properties.price}.000 ETH
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <ItemCount onAdd={onAdd} stock={5} initial={1} />
        </Card.Footer>
    </Card>

    )
}

export default Item
