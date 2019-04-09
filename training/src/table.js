import React, { Component } from 'react';
import { getUser } from './redux/selector';
import { connect } from 'react-redux';
import { loadUser } from './redux/action/account';
import * as firebase from 'firebase';

class Table extends Component {
    state = {
        data: null,
        isLoading: true,
        filter: '',
        count: 1
    }

    componentDidMount() {
        // this.props.loadUser();
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(data => this.setState({ data, isLoading: false }));
        firebase.database().ref('Users')
            .once('value')
            .then((snapshot) => {
                this.props.loadUser(snapshot.val())
            }).then(() =>
                this.setState({ data: this.props.user, isLoading: false }));
    }

    handleFilter = (e) => {
        this.setState({ filter: e });
    }

    render() {
        if (this.state.isLoading) {
            return ('Loading...');
        }
        return (<div className="col-md-8 m-4">
            <div className='m-2'>
                <span>Filter: </span>
                <input type='text' placeholder="filter by user name" onChange={e => this.handleFilter(e.target.value)} />
            </div>
            <table className="table table-dark" id="customers">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>User Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.filter(item => {
                            return item.name.includes(this.state.filter);
                        }).map((item, index) => {
                            return (
                                <tr key={index}><td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>);
    }
}

const mapStatetoProp = data => {
    const account = getUser(data);
    return account;
}
export default connect(mapStatetoProp, { loadUser })(Table);