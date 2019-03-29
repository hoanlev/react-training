import React, {Component} from 'react'
import LoginComponent from './Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
const Fobidden = () => 
<div>
<h1>Fobidden: do not have enough rights to perform this operation </h1>
<p>You must log in to view the page</p>
<Router>
 <Link to='/login' > Login</Link>
 <Route exact path = '/login' component = {LoginComponent}/>
</Router>
</div>

export default Fobidden;