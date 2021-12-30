import React, { Component } from 'react';
class LastName extends Component {
    render() {
        return (
            <div>            
                <label>
                Last Name:  </label>
                <input name="LastName" type="text"  />
                <br></br>
            </div>
        );
    }
}

export default LastName;