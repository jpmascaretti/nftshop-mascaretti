import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const RouteComponent = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default RouteComponent
