import React, { Component } from 'react'

class ConfirmationComponent extends Component {
    constructor(props) {
        super(props);
        
        console.log(this.props.dataFromParent);
    }

    render() {
        
        return (
            <div>
                <h1>hi girliepop</h1>
            </div>
        )
    }
}

export default ConfirmationComponent;