import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className="greet__style">{props.greet}</h1>
        </div>
    )
}

export default ItemListContainer
