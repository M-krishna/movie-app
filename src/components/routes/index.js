import React from 'react'
import { Route } from 'react-router-dom'

// Top Level Routes
import Home from './Home'
import SingleMovie from './SingleMovie'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/movie/:movieId',
        exact: true,
        component: SingleMovie
    }
]

export default routes

export function RouteWithSubRoutes(route) {
    return (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
        )}
    />
    );
}