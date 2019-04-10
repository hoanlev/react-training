import React, {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: '',
            error: null,
            isLoaded: false,
            items:[]
         };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    handleFilter =(text)=>{
        this.setState({filter: text});
    }
    render() { 
        const {filter,error, isLoaded,items} = this.state;
        if(error){
            return <div> Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }else{
            return ( 
                <div>
                    <span>Filter:</span>
                    <input type='text' onChange={event=>this.handleFilter(event.target.value)}/>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                        {
                            items.filter(item => {
                                return item.title.includes(filter);
                            }).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed}</td>
                                </tr>
                              ))
                        }
                    </table>
                </div>
            );
        }
    }
}
 
export default Table;