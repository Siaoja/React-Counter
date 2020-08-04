import React from 'react';
import Counter from '../Counter/index';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.amount,
            total:this.props.total
        }
    }

    showCounter = (input) => {
        let value = parseInt(input.target.value);
        if (Number.isNaN(value)) {
            this.setState({
                amount: 0,
                total: 0
            })
            this.props.changeAmount(value)
        } else {
            this.setState({
                amount: value
            })
            this.props.changeAmount(value)
        }
    }

    updateTotal = (type) => {
        this.props.updateTotal(type);
    }

    render() {
        let {total, amount} = this.props
        return (
            <div>
                <p><span>counter amount:      </span><input type="text" value={amount} onChange={this.showCounter.bind(this)}></input></p>
                <p><span>total amount:      </span><span defaultValue="0">{total}</span></p>
                {
                    new Array(this.state.amount).fill(0).map((value, index) => {
                        return (
                            <Counter updateTotal={this.updateTotal} key={index} amount={this.props.amount} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CounterGroup;