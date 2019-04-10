import React,{Component} from 'react';
import {getUserLogin} from '../redux/selectors';
import {connect} from 'react-redux';
class PageAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    handleLogout = () =>{
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location = "/";
    }
    render() { 
        return (<div>
            "This is Admin page..!"
            <div className="btn btn-success col-1" onClick={this.handleLogout} >Log out</div>
        </div>
        );
    }
}
 

const mapStatetoProp = user => {
    const userLogin = getUserLogin(user);
    return userLogin ?userLogin : {};
}

export default connect(
    mapStatetoProp
)(PageAdmin)