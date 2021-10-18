import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
        };
    }

    render() {
        if(this.state.isShow) {
            return (
                <h1>boy howdyyysh</h1>
            )
        } else return null;
    }
}

export default Welcome;