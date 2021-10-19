import React, { Component } from 'react'

class ConfirmationComponent extends Component {
    constructor(props) {
        super(props);
    }


    renderRows(data) {
        return data.map((candidate) => {
            return (
                <tr key={candidate.id}>
                    <td>{candidate.name}</td>
                    <td>{candidate.rank}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Your ballot</td>
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