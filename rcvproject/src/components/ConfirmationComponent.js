import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ConfirmationComponent extends Component {
    renderRows(data) {
        return data.map((candidate) => {
            return (
                <tr className="candidateRow confirmationRow" key={candidate.id}>
                    <td>{candidate.rank}</td>
                    <td>{candidate.name}</td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props)
            return (
                <div style={{visibility: this.props.open ? 'visible' : 'hidden'}} className="ConfirmationComponent">
                    <button class="closeButton" onClick={this.props.toggleConfirmation}>Close</button>
                    <td className="heading">Your ballot summary</td>
                    <table>
                        <tbody>
                            {this.renderRows(this.props.dataFromParent)}
                        </tbody>
                    </table>
                    <Link to="/">
                        <button class="castButton">Cast Ballot</button>
                    </Link>
                </div>
            )
    }
}

export default ConfirmationComponent;