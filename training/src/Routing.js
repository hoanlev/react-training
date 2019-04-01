import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import App from './App';
import Counter from './Counter';
import Table from './table';
import Signup from './signup';
import Signin from './signin';
import NotFound from './not-found'
import Parent from './parent';
import ReduxCounter from './redux-counter'
import ReduxCounter2 from './redux-counter2'
function BasicRouting() {
    var isAdmin = true;
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">My React</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign up </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign in </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/table">Table</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/parent">Parent </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nested-route">Nested route </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/redux-counter">Redux Couter </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/redux-counter2">Redux Couter2 </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/counter" component={Counter} />
                <Route path="/table" component={Table} />
                <Route path="/signup" render={() => (isAdmin ? <Signup /> : (<Redirect to="/" />))} />
                <Route path="/signin" component={Signin} />
                <Route path="/parent" component={Parent} />
                <Route path="/nested-route" component={ChildRoute} />
                <Route path="/redux-counter" component={ReduxCounter} />
                <Route path="/redux-counter2" component={ReduxCounter2} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
function ChildRoute({ match }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={`${match.url}/child-route-1`}>Child route 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${match.url}/child-route-2`}>Child route 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${match.url}/child-route-3`}>Child route 3</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route path={`${match.path}/:childId`} component={ChildComponent} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a route.</h3>}
            />
        </>
    );
}

function ChildComponent({ match }) {
    return (
        <div className='m-5'>
            <h3>Day la {match.params.childId.replace(/-/g, ' ').toUpperCase()}</h3>
            <ReduxCounter></ReduxCounter>
        </div>
    );
}
export default BasicRouting;