import React, { Component } from 'react';

class FirstName extends Component {
    render() {
        return (
            <div>            
                <label>
                First Name:
                </label>
                <input className="FirstName" type="text" 
                onChange={() =>this.props.onChange}>
                </input>
                {this.props.firstName}
                <br></br>
            </div>
        );
    }
}

export default FirstName;