import React, { Component } from 'react';
import Child from './child';
class Parent extends Component {
    state = { counters:[
        {id:1, val: 1},
        {id:2, val: 2},
        {id:3, val: 1},
        {id:4, val: 1},
        {id:5, val: 1}
    ] }

    handleIncrease = (e) => {
        console.log(e);
        let count = this.state.counters.find(item => {
            return item.id === e.id;
        });
        count.val = count.val + 1;
        this.setState({...this.state.counters, count});
    }

    render() { 
        return (
        <div>
        {this.state.counters.map((item, index)=> {
            return (
                // <li key={index}>abc</li>
            <Child key={index} item={item} onIncrease={this.handleIncrease}/>
            )

            
        })}</div>)
    }
}
 
export default Parent;