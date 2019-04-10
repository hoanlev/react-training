import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import App from "./App";
import counterSetState from "./counter/counterSetState";
import NotFound from "./NotFound"
import PageAdmin from "./admin/PageAdmin"
import Table from './table';
import FormLogin from './Form/FormLogin';
import FormSignUp from './Form/FormSignup';
import {getUserLogin} from './redux/selectors';
import {connect} from 'react-redux';
import { isNullOrUndefined } from 'util';

class Routing extends Component {

    constructor() {
        super();
    }

    render() {
        return (<>
            <div>{localStorage.getItem('username')? "WelCome: " + localStorage.getItem('username'): "Welcome: Guest" }</div>
            <div>{localStorage.getItem('email')? "Email: " + localStorage.getItem('email'): false }</div>
            <div>{BasicRouting(this.props.isAuthentication ? this.props.isAuthentication : false)}</div>
        </>
        );
    }
}

function BasicRouting(isAuthentication){

    if( !isAuthentication && localStorage.getItem("username") && localStorage.getItem("email")){
        isAuthentication = true;
    }

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
                <Route path="/login" render={()=>(!isAuthentication ? <FormLogin/> : (<Redirect to="/"/>))}/>
                <Route path="/sign-up" component={FormSignUp}></Route>
                <Route path="/admin-page" render = {()=>(isAuthentication ? <PageAdmin/> : (<Redirect to="/login"/>))} />
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
const mapStatetoProp = user => {
    const userLogin = getUserLogin(user);
    console.log(userLogin);
    return userLogin ?userLogin : {};
}

export default connect(
    mapStatetoProp
)(Routing)