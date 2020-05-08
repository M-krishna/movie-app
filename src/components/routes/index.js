import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Top Level Routes
import Home from './Home'
import SingleMovie from './SingleMovie'
import SignIn from './SignIn'
import Dashboard from './Dashboard'

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
    },
    {
        path: '/admin/login',
        exact: true,
        component: SignIn
    },
    {
        path: '/admin/dashboard',
        exact: true,
        component: props => {
            if(!localStorage.getItem("userData")){
                return <Redirect to="/admin/login"/>
            }
            return <RenderRoutes {...props} />
        },
        routes: [
            {
                path: '/admin/dashboard',
                exact: true,
                key: "dashboard",
                component: Dashboard
            }
        ]
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

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }