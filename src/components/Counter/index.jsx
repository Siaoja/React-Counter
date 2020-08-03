import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    increase = () => {
        this.props.increaseTotal();
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        })
    }

    reduce = () => {
        this.props.descTotal();
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        })
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