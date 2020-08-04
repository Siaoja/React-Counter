export const INCREASE_TOTAL = 'INCREASE_TOTAL';
export const DESC_TOTAL = 'DESC_TOTAL';

export const updateTotal = type => {
    switch (type) {
        case INCREASE_TOTAL:
            return {
                type: INCREASE_TOTAL
            }
        case DESC_TOTAL:
            return {
                type: DESC_TOTAL
            }
    }
}
export default updateTotal