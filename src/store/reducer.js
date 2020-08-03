import { bindActionCreators } from "redux"

const defaultState = {
    total: 0,
    counterAmount:0
}

export default (state = defaultState, action) => {
    if(action.type === 'add_total'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.total = state.total + action.data;
        return newState;
    }else if(action.type === 'desc_total'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.total = state.total - action.data;
        return newState;
    }else if(action.type === 'change_counter_amount'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.total = 0;
        newState.counterAmount = action.data;
        return newState;
    }
    return state;
}