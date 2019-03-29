import React, {Component} from 'react'
import LoginComponent from './Login';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'
const Fobidden = () => 
<div>
<h1>Fobidden: do not have enough rights to perform this operation </h1>
<p>You must log in to view the page</p>
<a href="/login">aaaa</a>
</div>

export default Fobidden;