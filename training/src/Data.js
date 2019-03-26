import React, { Component } from 'react';

const url = "https://jsonplaceholder.typicode.com/todos";
class Data extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            input: ''
        }
    }
    componentDidMount() {
        fetch(url).
            then(response => response.json()).
            then(show => {
                this.setState({
                    data: [show]
                });
            })
    }
    render() {
        return (
            <div>
                <div>
                    <br></br>

                    <input
                        className="form-control"
                        type="text"
                        placeholder="Default input"
                    />
                </div>
                <hr></hr>
                <div>
                    <table className="table">
                        <tbody>
                            <div>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">UserId</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">completed</th>
                                    </tr>
                                    {
                                        this.state.data.map((dynamicData, Key) => {
                                            let keys = Object.keys(dynamicData);

                                            return keys.map(data => {
                                                return (
                                                    <tr>

                                                        <td>{dynamicData[data].userId}</td>
                                                        <td>{dynamicData[data].id}</td>
                                                        <td>{dynamicData[data].title}</td>
                                                    </tr>
                                                );
                                            });
                                        })
                                    }
                                </thead>

                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Data;