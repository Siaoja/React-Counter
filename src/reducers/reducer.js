import { CHANGE_AMOUNT } from "../actions/changeAmount";
import { INCREASE_TOTAL, DESC_TOTAL } from "../actions/updateTotal";

const initState = {
    total: 0,
    amount: 0
}

export default function counterReducer(state = initState, action) {
    console.log("has execute")
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_AMOUNT:
            newState.amount = action.data
            newState.total = 0
            return newState;
        case INCREASE_TOTAL:
            newState.total = newState.total+1
            return newState;
        case DESC_TOTAL:
            newState.total = newState.total-1
            return newState;
        default:
            return state;
    }
}