import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Container from './pages/Container/';
import Product from './pages/Product';
import Admin from './pages/Admin';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Container} />
            <Route path="/products/:id" component={Product} />
            <Route path="/admin/" component = {Admin} />
        </Switch>
    </BrowserRouter>
);

export default Routes;