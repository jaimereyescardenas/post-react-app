import * as actionTypes from './actions';

const initialState = {
    totalPosts: [],
    posts: [],
    initialLoad: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIAL_LOAD:
            return {
                totalPosts: [...action.payload],
                posts: [...action.payload],
                initialLoad: true
            };

        case actionTypes.FILTER_POSTS:
            return {
                ...state,
                posts: (action.value === '') ? state.totalPosts : state.totalPosts.filter(
                    (post) => post.title.toLowerCase().includes(action.value.toLowerCase())
                )
            };
        case actionTypes.ADD_POST:
            return {
                ...state,
                totalPosts: state.totalPosts.concat(action.post),
                posts: state.totalPosts.concat(action.post)
            };
        case actionTypes.DELETE_POST:
            return {
                ...state,
                totalPosts: state.totalPosts.filter(post => post.id !== action.id),
                posts: state.totalPosts.filter(post => post.id !== action.id)
            };
        default:
            return state;
    }
};

export default reducer;