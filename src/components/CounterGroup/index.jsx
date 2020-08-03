import React from 'react';
import Counter from '../Counter/index';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterAmount: 0,
            total: 0
        }
    }

    showCounter = (input) => {
        let value = parseInt(input.target.value);
        if (Number.isNaN(value)) {
            this.setState({
                counterAmount: 0,
                total: 0
            })
        } else {
            this.setState({
                counterAmount: parseInt(input.target.value)
            })
        }

    }

    increaseTotal = () => {
        this.setState((prevState) => {
            return{
                total: prevState.total + 1
            }
        })
    }
    descTotal = () => {
        this.setState((prevState) => {
            return{
                total: prevState.total - 1
            }
        })
    }
    resetTotal = () => {
        this.setState({
                total: 0
        })
    }

    render() {
        return (
            <div>
                <p><span>counter amount:      </span><input type="text" defaultValue={this.state.counterAmount} onChange={this.showCounter.bind(this)}></input></p>
                <p><span>total amount:      </span><span defaultValue="0">{this.state.total}</span></p>
                {
                    new Array(this.state.counterAmount).fill(0).map((value, index) => {
                        return (
                            <Counter resetTotal={this.resetTotal} counterAmount={this.state.counterAmount} increaseTotal={this.increaseTotal} descTotal={this.descTotal} key={index} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CounterGroup;