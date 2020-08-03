import React from 'react';
import Counter from '../Counter/index';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterAmount: 0
        }
    }

    showCounter = (input) => {
        let value = parseInt(input.target.value);
        if (Number.isNaN(value)) {
            this.setState({
                counterAmount: 0
            })
        } else {
            this.setState({
                counterAmount: parseInt(input.target.value)
            })
        }

    }


    render() {
        return (
            <div>
                <span>counter amount:      </span><input type="text" defaultValue={this.state.counterAmount} onChange={this.showCounter.bind(this)}></input>
                {
                    new Array(this.state.counterAmount).fill(0).map((value, index) => {
                        return (
                            <Counter key={index} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CounterGroup;