import React from 'react';
import Counter from '../Counter/index';
import store from '../../store';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        // this.state = {
        //     counterAmount: 0,
        //     total: 0
        // }
        store.subscribe(this.listenchangeTotal)
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
        
        const action = {
            type: 'change_counter_amount',
            data: value
        }
        
        store.dispatch(action)
    }

    resetTotal = () => {
        this.setState({
                total: 0
        })
    }

    listenchangeTotal = () => {
        console.log(store.getState().total)
        //TODO why say can't call setState on a component that is not yet mounted
        this.setState(store.getState())
        // this.setState({
        //     total: store.getState().total
        // })
    }
    

    handleCounterAmountChange(){
        //监听函数

    }

    render() {
        return (
            <div>
                <p><span>counter amount:      </span><input type="text" defaultValue={this.state.counterAmount} onChange={this.showCounter.bind(this)}></input></p>
                <p><span>total amount:      </span><span defaultValue="0">{this.state.total}</span></p>
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