import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../service/auth.service'
import CounterComponent from './counter';
import { createBrowserHistory } from "history";
export default class LoginComponent extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    AuthenticationService.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to='/counter' />;
    }

    return (
      <div>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}
