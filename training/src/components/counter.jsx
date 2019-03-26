import React, {Component} from 'react';
class Counter extends Component{
    state = {
       value: this.props.value
    };

    handleIncrement = () =>{
        this.setState({value: this.state.value + 1});
    };
    handleReduce = () =>{
        this.setState({value: this.state.value - 1});
    };
    render(){
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button
                onClick={this.handleIncrement}
                className="btn btn-warning">
                 Increment
            </button>
            <button
                onClick={this.handleReduce}
                className="btn btn-primary">
                 Reduce
            </button>
        </div>
        );
    }
   
    formatCount(){
        const {value} = this.state;
        return value === 0 ? "0" : value;
    }
}
export default Counter;