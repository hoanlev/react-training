import React, { Component } from 'react';
class Couter extends Component {

    state = { count:0 }
    onHandleClick=() =>{
        console.log(this);
        // this.state.count = 2;
        console.log(this.state.count);
        
        this.setState({
            count: this.state.count + 1
        });
    }
    onHandleDecrease = () => {
        this.setState((state, prop)=>{
            return {
                count: state.count - 1
            }
        });
        
    }

    render() { 
        return ( <div className='m-4'><span className='m-2'> {this.state.count}</span>
       
        <button className='btn btn-primary btn-danger' onClick={this.onHandleClick}>Increase</button>
        <button className='btn btn-primary btn-danger' onClick={this.onHandleDecrease}>Decrease</button>
        </div> );
    }
}
 
export default Couter;