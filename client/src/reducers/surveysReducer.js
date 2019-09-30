const { FETCH_SURVEYS } = require('../actions/types');

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}