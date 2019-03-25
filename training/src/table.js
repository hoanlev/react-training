
import axios from 'axios';
import React from 'react';

class DataTable extends React.Component {
    getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(
                res => {
                    console.log(res.data);
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            );


    }
    render() {
        return (
            <button onClick={this.getData} />
        );
    }

}

export default DataTable;


