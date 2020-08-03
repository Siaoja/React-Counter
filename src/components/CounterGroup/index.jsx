import React from 'react';
import Counter from '../Counter/index';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterAmount: 0
        }
    }

    showCounter = (e) => {
        this.setState({
            counterAmount: parseInt(e.target.value)
        })
    }


    render() {
        return (
            <div>

                <span>counter amount:      </span><input type="text" onChange={this.showCounter.bind(this)}></input>
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