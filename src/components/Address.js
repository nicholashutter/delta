import React from 'react'; 

export class Address extends React.Component {

    render() {
        return (
            <div>
                <label>Address 1:</label>
                <input id="addr1" type="text"></input>
                <br />
                <label>Address 2:</label>
                <input id="addr2" type="text"></input>
            </div>
        )
    }
}

export default Address;