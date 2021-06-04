import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    const[count,setCount] = useState(initial);

    //Need to ask about onAdd as a callback. What do they mean by that? 
    //Need to make the counter and the button responsive
    function onAdd() {
        console.log(count)
    }

    return (
        <>  
            <div className="button__wrapper">
            <button className={count > 0 && count <= stock ? "button__count": "button__count--disabled"} disabled={count > 0 && count <= stock ? false : true}onClick={() => count > 0 ? setCount(count-1) : setCount(count)}>-</button>
            <h1>{count}</h1>
            <button className={count < stock && count >= 0 ? "button__count": "button__count--disabled"} disabled={count < stock && count >= 0 ? false : true} onClick={() => count < stock ? setCount(count+1) : setCount(count)}  >+</button>
            </div>
            <div className="button__wrapper--second">
            <button className={count > 0 && count <= stock ? "button__add-to-cart" : "button__add-to-cart--disabled"} disabled={count > 0 && count <= stock ? false : true} onClick={() => onAdd()}  >Add to Cart</button>
            </div>
        </>
    )
}

export default ItemCount
