import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import App from './App';
import Table from './table';
import Signup from './signup';
import Signin from './signin';
import NotFound from './not-found';
import ReduxCounter from './redux-counter';
import fire from './firebase/firebase';

class Routing extends Component {

    constructor() {
        super();
        this.state = ({
            name: null,
            isLoading: true
        });
    }

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ name: user.email, isLoading: false });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ name: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (<>
            <div>{BasicRouting(this.state.name)}
            </div>
        </>
        );
    }
}

function BasicRouting(name) {
    var isAuthoried = name ? true : false;
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Link className="navbar-brand" to="/">My React</Link>
                    <ul className="navbar-nav">
                        {!isAuthoried ? <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign in </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign up </Link>
                            </li>
                        </>
                            : <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/nested-route">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/table">Table</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/counter">Counter</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/parent">Parent </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/redux-counter">Redux Couter </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/redux-counter2">Redux Couter2 </Link>
                                </li> */}
                            </>}
                    </ul>
                </div>
                {isAuthoried ?
                    <div className="form-inline my-2 my-lg-0">
                        <div className="mr-sm-2" style={{ color: 'white' }}>Welcome {name}</div>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { fire.auth().signOut() }}>Logout</button>
                    </div> : <></>
                }
            </nav>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/signin" render={() => (!isAuthoried ? <Signin /> : (<Redirect to="/" />))} />
                <Route path="/signup" render={() => (!isAuthoried ? <Signup /> : (<Redirect to="/" />))} />
                <Route path="/table" render={() => (isAuthoried ? <Table /> : (<Redirect to="/signin" />))} />
                <Route path="/nested-route" component={isAuthoried ? ChildRoute : Signin} />
                <Route component={NotFound} />
                {/* <Route path="/parent" component={Parent} />
                <Route path="/counter" component={Counter} />
                <Route path="/redux-counter" component={ReduxCounter} />
                <Route path="/redux-counter2" component={ReduxCounter2} /> */}
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
                            <Link className="nav-link" to={`${match.url}/child-route-1`}>Counter 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${match.url}/child-route-2`}>Counter 2</Link>
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
export default Routing;