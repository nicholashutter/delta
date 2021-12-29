import React, { Component } from 'react';
class Birthdate extends Component {
    render() {
        return (
            <div>            
                <label>
                Birthdate:
                </label>
                <input className="Birthdate" type="text" 
                onChange={() =>this.props.onChange} />
                <br></br>
            </div>
        );
    }
}

export default Birthdate;