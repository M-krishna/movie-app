import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes, { RouteWithSubRoutes } from './routes'

const Main = props => {
    return (
        <div>
            <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
        </div>
    )
}

export default Main