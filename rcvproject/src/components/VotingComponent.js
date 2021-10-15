import React, { Component } from 'react'

class VotingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: this.props.language,
            maxVotes: 5,
            numVotes: Object.keys(currentVotes).length,
            candidates: [
                {},
                {},
                {},
            ],
            currentVotes: {
                first,
                second,
                third,
                fourth,
                fifth
            },
        }
    }

    changeVote(e) {
        //change state to either add or drop someone from the currentVotes, calls set vote

    }

    setVote(n) {
        //general function to set the currentvotes
    }

    checkRank() {
        //check the columns to make sure there is one vote per rank
        //check columns by checking the radios at whatever position?
    }

    render(data) {
        //onclick or whateva will call changevote
        return data.map((candidate, index) => {
            return (
                <tr key={index} onClick={this.}>
                    <td></td>
                </tr>
            )
        })
        
    }

}

export default VotingComponent;