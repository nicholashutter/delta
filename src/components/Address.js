import React from 'react'; 

export class Address extends React.Component {
    render() {
        return (
            <div>            
                <label>
                Address:
                </label>
                <input className="Address" type="text" 
                onChange={() =>this.props.onChange}>
                </input>
                {this.props.Address}
                <br></br>
            </div>
        )
    }
}

export default Address;