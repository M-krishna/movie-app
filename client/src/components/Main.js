import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import Admin from './Admin';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route exact path="/admin" component={Admin} />
        <Route component={Error} />
    </Switch>
);


export default Main;