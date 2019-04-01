import React, { Component } from 'react';
class Table extends Component {
    state = {
        data: null,
        isLoading: true,
        filter: '',
        count: 1
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({ data, isLoading: false }));
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
                <input type='text' onChange={e => this.handleFilter(e.target.value)} />
            </div>
            <table className="table table-dark" id="customers">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Complete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.filter(item => {
                            return item.title.includes(this.state.filter);
                        }).map((item, index) => {
                            return (
                                <tr key={index}><td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>);
    }
}

export default Table;