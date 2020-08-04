const { DESC_TOTAL, INCREASE_TOTAL } = require("../actions/updateTotal");

export default function total(state = 0, action) {
    switch (action.type) {
        case INCREASE_TOTAL:
            return state + 1;
        case DESC_TOTAL:
            return state - 1;
        default:
            return state;
    }
}