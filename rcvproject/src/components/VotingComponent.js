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
            isHiddenWarning: true,
            warningMsg: "You have duplicate votes. Please change your vote to have one candidate per rank.",
            openConfirmation: false,
        }
    }

    toggleConfirmation() {
        console.log("confirmation hidden hehe");
        console.log(this.state.openConfirmation);
        this.setState((prevState) => {
            return {
                openConfirmation: !prevState.openConfirmation
            }
        }, () => {
            console.log(this.state.openConfirmation);
        })
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

        //calc numvotes lol
        tempCandidates.map((candidate, i) => {
            if(candidate.rank > 0) {
                this.setState({
                    numVotes: this.state.numVotes + 1
                });
            }
        })


        //grab the candidate name, update rank
        this.setState({
            candidates: tempCandidates,
        })
    }

    checkRank() {
        //check the columns to make sure there is one vote per rank
        //we dont wanna actually touch the data lol
        let currentVoteCheck = this.state.candidates;

        //grab the ranks, throw em in a temp array
        let newArr = currentVoteCheck.map((candidate) => candidate.rank);

        //get rid of the 0s so the set doesnt count those as dupes
        newArr = newArr.filter(rank => rank > 0)

        //make a set of the temp array
        let tempSet = new Set(newArr);
        
        if(tempSet.size < newArr.length) {
            //there are duplicates!!!
            console.log("THESE PEOPLE HAVE DUPLICATE VOTES!!!!!")
            this.setState((prevState) => {
                return {
                    isHiddenWarning: !prevState.isHiddenWarning
                }
            })

        } else {
            //BRING UP THE CONFIRMATION PAGE!!!
            this.setState({
                finalVote: currentVoteCheck.filter((candidate) => candidate.rank > 0),
                isHiddenWarning: true,
                numVotes: 0,
            }, () => {
                //make sure it fr updated lol
                //console.log(this.state.finalVote);
            })
            //show the confirmation :p
            this.toggleConfirmation();
        }

    }

    renderRows(data) {
        this.buildVote = this.buildVote.bind(this);

        return data.map((candidate) => {
            return (
                    <tr className="candidateRow" key={candidate.id} >
                        <td>{candidate.name}</td>
                        <td className="votingRadios" onChange={this.buildVote}>
                            <div class="radioRow">
                                <input className="radioSelect" type="radio" id="first" name={candidate.name} value="1"></input>
                                <label for="first">1</label>
                            </div>

                            <div class="radioRow">
                                <input className="radioSelect" type="radio" id="second" name={candidate.name} value="2"></input>
                                <label for="second">2</label>
                            </div>

                            <div class="radioRow">
                                <input className="radioSelect" type="radio" id="third" name={candidate.name} value="3"></input>
                                <label for="third">3</label>
                            </div>

                            <div class="radioRow">
                                <input className="radioSelect" type="radio" id="fourth" name={candidate.name} value="4"></input>
                                <label for="fourth">4</label>
                            </div>

                            <div class="radioRow">
                                <input className="radioSelect" type="radio" id="fifth" name={candidate.name} value="5"></input>
                                <label for="fifth">5</label>
                            </div>

                            <div class="radioRow">
                                <input className="radioSelect" type="radio" id="none" name={candidate.name} value="0" defaultChecked></input>
                                <label for="none">No vote</label>
                            </div>
                        </td>
                    </tr>
            )
        })
    }

    render() {
        this.checkRank = this.checkRank.bind(this);
        this.toggleConfirmation = this.toggleConfirmation.bind(this);

        let confirmationPop;
        //check if empty
        if(Object.keys(this.state.finalVote).length > 0) {
            //empty
            confirmationPop = <ConfirmationComponent dataFromParent= {this.state.finalVote} open={this.state.openConfirmation} toggleConfirmation={this.toggleConfirmation}/>
        }

        return (
            <div className="VotingComponent">
                <div>
                    { this.state.isHiddenWarning ? null : <p  className="warning">{this.state.warningMsg}</p>}
                </div>
                <table style={{filter: this.state.openConfirmation ? 'blur(1.5px)' : 'blur(0)'}}>
                    <thead className="tableHeading">
                        <tr>
                            <th>Candidate</th>
                            <th>Ranking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(this.state.candidates)}
                        <tr className="writeIns">
                            <td>Write Ins</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="submitArea">
                    <span style={{
                        color: this.state.numVotes > 5 ? 'red' : '#020752'
                    }}>{this.state.numVotes} / {this.state.maxVotes}</span>
                    <button className="submitButton" onClick={this.checkRank}>
                        Submit
                    </button>
                </div>
                {confirmationPop}
                
            </div>
        );
    }

}

export default VotingComponent;