import React from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import "../ItemCount/ItemCount.css";
import "./ItemDetail.css"

// Note: responsiveness included in single page

const ItemDetail = ({item}) => {

    function onAdd() {
        console.log("Added to Cart");
      }

    return (
    <Card className="card__position--top">
        <Card.Body>
        <Card.Text className="card__title">
            {item.title}
          </Card.Text>
        <div className="card__image--size">
        <Card.Img  className="card__image" variant="top" src={item.pictureUrl}/>
        </div>
        <Card.Text>
            {item.description}
         </Card.Text>
          <Card.Text>
            ID#{item.id}
          </Card.Text>
        <Card.Text>
            {item.price}.000 ETH
        </Card.Text>
        <Card.Footer>
        <ItemCount onAdd={onAdd} stock={5} initial={1} />
        </Card.Footer>
        </Card.Body>

    </Card>

    )
}

export default ItemDetail
