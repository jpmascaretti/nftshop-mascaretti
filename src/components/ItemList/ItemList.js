import React, {useState} from 'react'
import Item from "../Item/Item";
import "./ItemList.css";
import {CardColumns} from 'react-bootstrap'

const ItemList = ({items}) => {
    const [info, setData] = useState([]);
    items.then(data => setData(data))

    return ( 
        <CardColumns className="card__grid--layout">
            {info.map((element,i) => 
            <React.Fragment >
                <Item key={i} properties={element}/>
            </React.Fragment>)}
        </CardColumns>
    )
}

export default ItemList
