import CounterGroup from "../components/CounterGroup"
import changeAmount from "../actions/changeAmount"
import updateTotal from "../actions/updateTotal"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        total: state.total,
        amount: state.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTotal: (type) => {
            dispatch(updateTotal(type))
            // dispatch({
            //     type: type
            // })
        },
        changeAmount: (amount) => {
            dispatch(changeAmount(amount))
            // dispatch({
            //     type: CHANGE_AMOUNT,
            //     data: amount
            // })
        }
    }
}

const CounterGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CounterGroup)

export default CounterGroupContainer