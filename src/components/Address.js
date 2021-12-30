import React from 'react'; 

export class Address extends React.Component {
    render() {
        return (
            <div>            
                <label>
                Address:    </label>
                <input name="Address" type="text" />
                <br></br>
            </div>
        )
    }
}

export default Address;