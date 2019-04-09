import React, { Component } from 'react';
import fire from './firebase/firebase';
import logo from './logo.svg';
import './signup.css';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'password is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      window.location = '/';
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Sign in</h2>
        <div className="panel panel-default">
          {/* <FormErrors formErrors={this.state.formErrors} /> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" required className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput} />
          <p className="text-danger">{this.state.formErrors.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`} name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput} />
          <p className="text-danger">{this.state.formErrors.password}</p>
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

export default Signin;