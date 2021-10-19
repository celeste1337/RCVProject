import React, { Component } from 'react'
import ConfirmationComponent from './ConfirmationComponent';

class VotingComponent extends Component {
    constructor(props) {
        super(props);


        this.state = {
            language: this.props.language,
            maxVotes: 5,
            numVotes: 0,
            candidates: [
                {name:"Eric L. Adams", rank:0},
                {name: "Maya D. Wiley", rank:0},
                {name: "Kathryn A. Garcia", rank:0},
                {name: "Andrew Yang", rank:0},
                {name: "Scott M. Stringer", rank:0},
                {name: "Dianne Morales", rank:0},
                {name: "Raymond J. McGuire", rank:0},
                {name: "Shaun Donovan", rank:0},
                {name: "Aaron S. Foldenauer", rank:0},
                {name: "Art Chang", rank:0},
                {name: "Paperboy Love Prince", rank:0},
                {name: "Joycelyn Taylor", rank:0},
                {name: "Isaac Wright Jr.", rank:0},
            ],
            finalVote: {},
        }
    }

    buildVote(e) {
        //builds vote based off input stuff
        let targetVote = {
            rank: parseInt(e.target.value),
            name: e.target.name
        }

        this.setVote(targetVote);
    }

    setVote(n) {
        //this needs to add the targetvote to currentvotes
        let targetName = n.name;

        let tempCandidates = this.state.candidates;
        tempCandidates.map((candidate, i) => {
            if(candidate.name === targetName) {
                candidate.rank = n.rank
            } else {
                return "not equal :/"
            }
        });


        //grab the candidate name, update rank
        this.setState({
            candidates: tempCandidates
        })
    }

    checkRank() {
        //check the columns to make sure there is one vote per rank
        //we dont wanna actually touch the data lol
        let currentVoteCheck = this.state.candidates;
        let correctVotes;

        //grab the ranks, throw em in a temp array
        let newArr = currentVoteCheck.map((candidate) => candidate.rank);

        //get rid of the 0s so the set doesnt count those as dupes
        newArr = newArr.filter(rank => rank > 0)

        //make a set of the temp array
        let tempSet = new Set(newArr);
        
        if(tempSet.size < newArr.length) {
            //there are duplicates!!!
            console.log("THESE PEOPLE HAVE DUPLICATE VOTES!!!!!")
        } else {
            //BRING UP THE CONFIRMATION PAGE!!!
            this.setState({
                finalVote: currentVoteCheck.filter((candidate) => candidate.rank > 0)
            }, () => {
                //make sure it fr updated lol
                //console.log(this.state.finalVote);
            })
            
        }

    }

    renderRows(data) {
        this.buildVote = this.buildVote.bind(this);

        return data.map((candidate) => {
            return (
                    <tr key={candidate.id} >
                        <td>{candidate.name}</td>
                        <td class="voter" onChange={this.buildVote}>
                            <input type="radio" id="first" name={candidate.name} value="1"></input>
                            <input type="radio" id="second" name={candidate.name} value="2"></input>
                            <input type="radio" id="third" name={candidate.name} value="3"></input>
                            <input type="radio" id="fourth" name={candidate.name} value="4"></input>
                            <input type="radio" id="fifth" name={candidate.name} value="5"></input>
                            <input type="radio" id="none" name={candidate.name} value="0" defaultChecked></input>
                        </td>
                    </tr>
            )
        })
    }

    render() {
        //onclick or whateva will call changevote
        this.checkRank = this.checkRank.bind(this);
        let confirmationPop;
        //check if empty
        if(Object.keys(this.state.finalVote).length > 0) {
            //empty
            confirmationPop = <ConfirmationComponent dataFromParent= {this.state.finalVote}/>
        }

        return (
            <div>
                <div class="warning">
                    <p>You have duplicate votes. Please change your vote to have one candidate per rank.</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Candidate</th>
                            <th>Rank</th>
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
                {confirmationPop}
            </div>
        );
    }

}

export default VotingComponent;