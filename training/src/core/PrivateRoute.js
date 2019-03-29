import React from 'react'
import  {Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../service/auth.service'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      AuthenticationService.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/fobidden' />
    )} />
  )
  export default PrivateRoute;