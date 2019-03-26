
import axios from 'axios';
import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class DataTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loaded: false
        }
    }

    getData = () => {
        this.setState({ loaded: false });
        axios.get('https://jsonplaceholder.typicode.com/todos')
            // .then(
            //     res => {
            //         res.data.pipe(s => {
            //             if (s.completed === true) {
            //                 s.completed = 'Hoàn thành';
            //             } else {
            //                 s.completed = 'Chưa hoàn thành';
            //             }
            //         });
            //     }
            // )
            .then(
                res => {
                    console.log(res.data);
                    this.setState({
                        data: res.data,
                        loaded: true
                    });
                }

            )
            .catch(
                error => {
                    console.log(error);
                }
            );

    }



    render() {

        const columns = [{
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'User Id',
            accessor: 'userId'
        },
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Completed',
            accessor: 'completed',
            Cell: props => (props.value == true ? 'Hoàn thành' : 'Chưa hoàn thành')
        }];
        const Show = () => {
            if (this.state.loaded) {
                return (
                    <ReactTable
                        data={this.state.data}
                        columns={columns}
                        defaultPageSize={5}
                        filterable={true}
                    />);
            }

            return (
                <p>Loading...</p>
            );
        }


        return (
            <>
                <button onClick={this.getData} >Get data</button>
                <hr />
                <Show />
            </>

        );
    }

}

export default DataTable;


