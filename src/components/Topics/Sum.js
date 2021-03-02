import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleChangeOne(num1) {
        this.setState({number1: parseInt(num1, 10)})
    }
    handleChangeTwo(num2) {
        this.setState({number2: parseInt(num2, 10)})
    }
    add(number1, number2) {
        this.setState({sum: number1 + number2});
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={elem => this.handleChangeOne(elem.target.value)}/>
                <input className="inputLine" type="number" onChange={elem => this.handleChangeTwo(elem.target.value)}/>
                <button className="confirmationButton" onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;