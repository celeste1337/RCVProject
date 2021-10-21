import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                <div className="welcome">
                    <h1>Hello Citizen!</h1>
                    <Link to="/vote">PLEASE ENTER YOUR AUTHENTICATION CARD</Link>
                </div>
            )
        } else return null;
    }
}

export default Welcome;