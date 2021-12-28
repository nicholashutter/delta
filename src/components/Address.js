import React from 'react'; 
import CustomerForm from './CustomerForm';

export class Address extends React.Component {
    constructor(props)
    {
      super(props)
    }

    render() {
        return (
            <div>
                <label>Address 1:</label>
                <input id="addr1" type="text"></input>
                <br />
                <label>Address 2:</label>
                <input id="addr2" type="text" value={this.state.Address} onChange={this.addressChange}></input>
            </div>
        )
    }
}

export default Address;