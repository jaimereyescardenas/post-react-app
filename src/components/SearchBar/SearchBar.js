import React, { useState } from "react";
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import './SearchBar.css';

const SearchBar = (props) => {

    const [inputState, setInputState] = useState('');

    return (
        <div className="row my-3">
            <div className="col-lg-10 col-md-9 col-sm-8 my-1 my-sm-0">
                <input 
                    name="search-name" 
                    placeholder="Filtrar por nombre" 
                    className="form-control search-name" 
                    onChange={(event) => setInputState(event.target.value)}
                />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 my-1 my-sm-0">
                <button 
                    className="btn btn-search btn-block text-light"
                    onClick={() => props.onFilterPosts(inputState)}
                >
                    Buscar &nbsp;
                    <span>
                        <img src="img/magnifying-glass-icon.svg" alt="Lupa" />
                    </span>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        totalPosts: state.totalPosts,
        posts: state.posts,
        initialLoad: state.initialLoad
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialLoad: (payload) => dispatch({ type: actionTypes.INITIAL_LOAD, payload: payload }),
        onFilterPosts: (value) => dispatch({ type: actionTypes.FILTER_POSTS, value: value }),
        onAddPost: (post) => dispatch({ type: actionTypes.ADD_POST, post: post }),
        onDeletePost: (id) => dispatch({ type: actionTypes.DELETE_POST, id: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);