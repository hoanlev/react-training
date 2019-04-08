import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser, logout } from '../actions/userAction'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                    <div id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                {
                                    this.props.user === null ? (<Link to="/login">Login</Link>) : (<Link to="/logout" onClick={() => this.props.logout()}>Logout</Link>)
                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser, logout })(Header);