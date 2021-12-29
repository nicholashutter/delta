import React, { Component } from 'react';

class FirstName extends Component {
    render() {
        return (
            <div>            
                <label>
                First Name:
                </label>
                <input name="FirstName" type="text"  />
                <br></br>
            </div>
        );
    }
}

export default FirstName;