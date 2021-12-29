import React, { Component } from 'react';
class LastName extends Component {
    render() {
        return (
            <div>            
                <label>
                Last Name:
                </label>
                <input className="LastName" type="text" 
                onChange={() =>this.props.onChange} />
                <br></br>
            </div>
        );
    }
}

export default LastName;