import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import App from "./App";
import counterSetState from "./counter/counterSetState";
import NotFound from "./NotFound"
import PageAdmin from "./admin/PageAdmin"
import Table from './table';

function Routing(){
    var isAdmin = true;
    return (
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/admin-page">Admin</Link></li>
                <li><Link to="/table">Table</Link></li>
                <li><Link to="/nested-route">Nested route</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/counter" component={counterSetState}></Route>
                <Route path="/admin-page" render = {()=>(isAdmin ? <PageAdmin/> : (<Redirect to="/"/>))} />
                <Route path="/table" component={Table} />
                <Route path="/nested-route" component={ChildRoute} />
                <Route component={NotFound}></Route>
            </Switch>
        </div>
        </BrowserRouter>
    );
}
function ChildRoute({match}){
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/child-route-1`}>Child route 1</Link>
                    <Link to={`${match.url}/child-route-2`}>Child route 2</Link>
                </li>
            </ul>
            <Route path={`${match.path}/:Child`} component={ChildComponent}></Route>
            <Route exact path={match.path} render={()=><h2>Please select a route.</h2>}></Route>
        </div>
    );
}

function ChildComponent ({match}) {
    return (
        <div>
            <h3>This is a Child Route + {window.location.href}</h3>
        </div>
    );
}
export default Routing;
