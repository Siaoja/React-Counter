import amount from './amount';
import total from './total';
const { combineReducers } = require("redux");

const manageCounters = combineReducers(
    total,
    amount
)
export default manageCounters