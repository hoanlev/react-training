import React from 'react';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import DataTable from './table'

import Counter12 from './Counter1.2'

import App from './App'

import NotFound from './not-found'

function BasicRouting() {
    let isAdmin = false;
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/counter" render={() => (isAdmin ? <Counter12 /> : (<Redirect to="/" />))} />
                    <Route path="/table" component={ChildRoute} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

function ChildRoute({ match }) {
    console.log('ChildRoute',match);
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/child-route-1`}>Child route 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/child-route-2`}>Child route 2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/child-route-3`}>Child route 3</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:childId`} component={ChildComponent} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a route.</h3>}
            />
        </div>
    );
}


function ChildComponent({ match }) {
    console.log('ChildComponet', match);
    return (
        <div>
            <h3>Day la {match.params.childId.replace(/-/g, ' ').toUpperCase()}</h3>
        </div>
    );
}


export default BasicRouting;