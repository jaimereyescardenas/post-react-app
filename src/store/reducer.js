import * as actionTypes from './actions';

const initialState = {
    posts: [],
    initialLoad: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIAL_LOAD:
            return {
                posts: [...action.payload],
                initialLoad: true
            };
        default:
            return state;
    }
};

export default reducer;