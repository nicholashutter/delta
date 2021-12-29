import React, { Component } from 'react';
class State extends Component {
    render() {
        return (
            <div>            
            <label>
            State:
            </label>
            <input className="State" type="text" 
            onChange={() =>this.props.onChange}/>
            <br></br>
        </div>
        );
    }
}

export default State;