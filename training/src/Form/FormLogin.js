import React, { Component } from 'react';
import { FormErrors } from './form-error';
import {connect} from 'react-redux';
//import './form.css';
import {getUser} from '../redux/action/login';
import * as firebase from 'firebase';

class FormLogin extends Component {
    constructor (props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
    }
  
    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }
  
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      const {email, password} = this.state;
      const database = firebase.database();
      
      let listUser = [];
      let user;
      let checkAuth = false;
      var userLogin;

      database.ref('user')
        .once('value')
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            listUser.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
          for (let i = 0; i < listUser.length; ++i){
            if (email === listUser[i].email && password === listUser[i].password) {
              user = listUser[i];
              checkAuth = true;
              break;
            }
          }

          userLogin = {
            UserLogin: user,
            isAuthentication: checkAuth
          };
    }).then(()=>{
      if(!checkAuth){
        alert("password or email incorrect!")
      }
      else{
        this.props.getUser(userLogin);
      }
    });
  }


  
    render () {
      return (
          <div>
              <form className="demoForm" onSubmit={this.handleSubmit}>
                  <h2>Sign in</h2>
                  <div className="panel panel-default">
                      <FormErrors formErrors={this.state.formErrors} />
                  </div>
                  <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                      <label htmlFor="email">Email address</label>
                      <input type="email" required className="form-control" name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleUserInput} />
                  </div>
                  <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleUserInput} />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign in</button>
              </form>
              <div>You dont have account please<a href="/sign-up">Sign up</a></div>
          </div>
      )
    }
  }
  const mapStateToProps = state => {
    return state;
  }

  export default connect(
    mapStateToProps,
    {getUser}
)(FormLogin);