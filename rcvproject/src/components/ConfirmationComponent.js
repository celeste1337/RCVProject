import React, { Component } from 'react'

class ConfirmationComponent extends Component {
    renderRows(data) {
        return data.map((candidate) => {
            return (
                <tr className="candidateRow confirmationRow" key={candidate.id}>
                    <td>{candidate.name}</td>
                    <td>{candidate.rank}</td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props)
            return (
                <div style={{visibility: this.props.open ? 'visible' : 'hidden'}} className="ConfirmationComponent">
                    <button onClick={this.props.toggleConfirmation}>Close</button>
                    <table>
                        <thead>
                            <tr>
                                <td className="heading">Your ballot summary</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.props.dataFromParent)}
                        </tbody>
                    </table>
                </div>
            )
    }
}

export default ConfirmationComponent;