import React from 'react';
import Counter from '../Counter/index';

class CounterGroup extends React.Component {

    constructor(props) {
        console.log("构造函数")
        super(props);
    }


    render() {
        return (
            <div>
                {
                    new Array(5).fill(0).map((value,index) => {
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