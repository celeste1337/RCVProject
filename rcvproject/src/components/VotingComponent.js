import React, { Component } from 'react'

class VotingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: this.props.language,
            maxVotes: 5,
            numVotes: 0,
            candidates: [
                {name:"hello"},
                {},
                {},
            ],
            currentVotes: [],
        }
    }

    buildVote(e) {
        //builds vote based off input stuff
        let targetVote = {
            rank: e.target.value,
            name: e.target.name
        }

        this.setVote(targetVote);
    }

    setVote(n) {
        //this needs to add the targetvote to currentvotes
        this.setState({
            currentVotes: [...this.state.currentVotes, n]
          })
    }

    checkRank() {
        //check the columns to make sure there is one vote per rank
        // this.state.currentVotes.map((vote, i) => {
        //     console.log(vote)
        // })
        console.log(this.state)
    }

    renderRows(data) {
        this.buildVote = this.buildVote.bind(this);

        return data.map((candidate, index) => {
            return (
                    <tr key={candidate.id} >
                        <td>{candidate.name}</td>
                        <td onChange={this.buildVote}>
                            <input type="radio" id="first" name={candidate.name} value="1"></input>
                            <input type="radio" id="second" name={candidate.name} value="2"></input>
                            <input type="radio" id="third" name={candidate.name} value="3"></input>
                            <input type="radio" id="fourth" name={candidate.name} value="4"></input>
                            <input type="radio" id="fifth" name={candidate.name} value="5"></input>
                        </td>
                    </tr>
            )
        })
    }

    render() {
        //onclick or whateva will call changevote
        this.checkRank = this.checkRank.bind(this);

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Candidate</th><th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(this.state.candidates)}
                        <tr>
                            <td>Write Ins</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.checkRank}>
                    Submit
                </button>
            </div>
        );
    }

}

export default VotingComponent;