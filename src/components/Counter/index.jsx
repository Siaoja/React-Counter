import React from 'react';
import store from '../../store/index'
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        store.subscribe(this.listenchangeCounterAmount)
    }

    increase = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        })
        
        const action = {
            type: 'add_total',
            data: 1
        }
        
        store.dispatch(action)
    }

    reduce = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        })
        
        // console.log("front or end")
        const action = {
            type: 'desc_total',
            data: 1
        }
        
        store.dispatch(action)
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

    listenchangeCounterAmount = () => {
        this.setState({
            count: 0
        })
    }

    // componentWillReceiveProps = (nextProps) => {
    //     if (this.props.counterAmount != nextProps.counterAmount) {
    //         this.setState({
    //             count: 0
    //         })
    //         this.props.resetTotal()
    //     }

    // }

    componentWillMount = () => {
        console.log("component will mount")
    }
    componentDidMount = () => {
        console.log("component did mount")
    }
    componentWillUnmount = () => {
        console.log("component will unmount")
    }
}

export default Counter;