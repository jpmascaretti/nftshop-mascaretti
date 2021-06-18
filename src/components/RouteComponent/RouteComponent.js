import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const RouteComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/category/:id">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default RouteComponent
