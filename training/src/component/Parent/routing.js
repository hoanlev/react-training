import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Child1Component, CustomChildComponent } from './Child'
const routing = (matchData) =>
    (
        <Router>
            <ul>
                <li>
                    <Link to={`${matchData.url}/child1`} >Real Child </Link>
                </li>
                <li>
                    <Link to={`${matchData.url}/:other`}>Other Child </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${matchData.url}/child1`} component={Child1Component} />
                <Route path={`${matchData.url}/:child`} component={CustomChildComponent} />
                <Route
                    exact
                    path={matchData.path}
                    render={() => <h3>I'm mother!</h3>}
                />
            </Switch>
        </Router>//Question: remove router tag
    )


//q2: why const, function, class

export const ParentRouting = routing;