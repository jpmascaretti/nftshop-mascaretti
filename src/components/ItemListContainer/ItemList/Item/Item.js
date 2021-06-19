import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ItemCount from '../../../ItemCount/ItemCount'
import "../../../ItemCount/ItemCount.css";
import "./Item.css";

const Item = ({properties}) => {
    console.log(properties.pictureUrl)
    function onAdd() {
        console.log("Added to Cart");
      }
    return (
    <Card style={{ width: '24rem' }}>
        <Link to={`/item/${properties.id}`}>
        <Card.Img variant="top" src={properties.pictureUrl} />
        <Card.Body className="card__body--text" >
            <Card.Title className="card__body--text">{properties.title}</Card.Title>
            <Card.Text className="card__body--text">
            {properties.description}
            </Card.Text>
            <Card.Text className="card__body--text">
            {properties.price}.000 ETH
            </Card.Text>
        </Card.Body>
        </Link>
        <Card.Footer>
        <ItemCount onAdd={onAdd} stock={5} initial={1} />
        </Card.Footer>
    </Card>

    )
}

export default Item
