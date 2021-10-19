import React, { Component } from 'react'

class ConfirmationComponent extends Component {
    constructor(props) {
        super(props);
    }


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
        return (
            <div className="ConfirmationComponent">
                <table>
                    <thead>
                        <tr>
                            <td className="heading">Your ballot</td>
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