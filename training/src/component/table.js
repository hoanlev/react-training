import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        return {
            data: nextProps.data
        }
    }
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th key="Id">Id</th>
                        <th key="UserId">UserId</th>
                        <th key="Title">Title</th>
                        <th key="Completed">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((user) => {
                            {/* return  <tr>
                                {
                                    Object.keys(user).map(function(key, index) {
                                        {return <td>{user[key]}</td>}
                                    })
                                } */}
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userId}</td>
                                <td>{user.title}</td>
                                <td>{user.completed ? 'Yes' : 'No'}</td>

                            </tr>
                        })
                    }
                </tbody>
            </Table>
        )
    }
}

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            users: [],
            error: null,
            keywords: '',
            usersFitKeywords: [],
        };
    }

    componentDidMount() {
        this.featchUserData();
    }
    
    featchUserData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result,
                        usersFitKeywords: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            ).catch(error => this.setState({
                isLoaded: true,
                error: error
            }));
    }


    filterByTitle = (event) => {
        let newKeywords = event.target.value;
        let newUsersFitKeywords = this.state.users.filter(user => user.title.includes(newKeywords));
        this.setState(state => ({ ...state, usersFitKeywords: newUsersFitKeywords, keywords: newKeywords }));
    }

    render() {
        return this.state.isLoaded ?
            (this.state.error ? (<div>There are errors from this endpoint.</div>) :
                (
                    <div>
                        <input type="text" placeholder="Filter by title" onChange={this.filterByTitle} ></input>
                        <UserTable data={this.state.usersFitKeywords}></UserTable>
                    </div>
                )) : (<div>Is Loading..</div >)
    }
}

export default TableComponent;