import React from 'react';
import { INCREASE_TOTAL, DESC_TOTAL } from '../../actions/updateTotal';
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    increase = () => {
        this.props.updateTotal(INCREASE_TOTAL);
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        })
    }

    reduce = () => {
        this.props.updateTotal(DESC_TOTAL);
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        })
        
    }

    componentDidUpdate(prevProps, nextState){
        console.log(this.props)
        console.log(prevProps)
        if(this.props.amount !== prevProps.amount){
            this.setState((nextState) => {
                return{
                    count: 0
                }
            })
        }
    }

    render() {
        return (
            <div className='main'>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.count}</mark>
                <button onClick={this.reduce}>-</button>
            </div>
        );
    }
}

export default Counter;