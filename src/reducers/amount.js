const { CHANGE_AMOUNT } = require("../actions/changeAmount");

export default function amount(state = 0, action){
    switch(action.type){
        case CHANGE_AMOUNT:
            return state = action.data;
        default:
            return state;
    }
}