export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';

export const changeAmount = amount =>{
    return{
        type:CHANGE_AMOUNT,
        data: amount
    }
}
export default changeAmount