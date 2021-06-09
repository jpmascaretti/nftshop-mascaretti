import React, {useState} from 'react'

const ItemList = ({items}) => {
    const [info, setData] = useState([]);
    items.then(data => setData(data))

    //Here I need to map each element from info to <Item> and from inside item render each val
    const something = info[1]
    console.log(something)
    return ( 
        <div className="greet__style">
            {info.map((element,i) => 
            <React.Fragment key={i}>
                <h4>{element.title}</h4>
            </React.Fragment>)}
            <h1 className="greet__style">Hello</h1>
        </div>
    )
}

export default ItemList
