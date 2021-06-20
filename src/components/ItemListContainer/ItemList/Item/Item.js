import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import ItemCount from '../../../ItemCount/ItemCount'
import "../../../ItemCount/ItemCount.css";
import "./Item.css";

const Item = ({properties}) => {

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
            {properties.price}.000 ETH = ${Math.round(2237.88*properties.price).toFixed(2)} USD
            </Card.Text>
        </Card.Body>
        </Link>
        {/* <Card.Footer>
        <ItemCount stock={5} initial={1} />
        </Card.Footer> */}
    </Card>

    )
}

export default Item
