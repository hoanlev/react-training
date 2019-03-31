import React, { Component } from 'react';
class Child extends Component {
    render() { 
        return ( <div>
            <span className='m-2'>{this.props.item.val}</span>
            <button className='btn btn-primary btn-danger' onClick={()=>this.props.onIncrease(this.props.item)}>Increase</button>
        </div> );
    }
}
 
export default Child;