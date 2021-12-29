import React, { Component } from 'react';

class FirstName extends Component {
    render() {
        return (
            <div>            
                <label>
                First Name:
                </label>
                <input className="FirstName" type="text" 
                onChange={() =>this.props.onChange}  />
                <br></br>
            </div>
        );
    }
}

export default FirstName;