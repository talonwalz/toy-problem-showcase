import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ``
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    evenOrOdd(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for(let i=0; i<arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10));
            } else {
                odds.push(parseInt(arr[i], 10));
            }
        }
        return this.setState({evenArray: evens, oddArray: odds});
    }
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={elem => this.handleChange(elem.target.value)}/>
                <button className='confirmationButton' onClick={() => {this.evenOrOdd(this.state.userInput)}}>Split</button>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;