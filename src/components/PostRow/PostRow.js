import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import BASE_URL from '../../helpers/data';
import * as actionTypes from '../../store/actions';

import './PostRow.css';

const PostRow = (props) => {

    const deletePost = (id) => {
        const postToDelete = {
            id: id
        };

        axios.delete(BASE_URL + '/post', { data: postToDelete })
         .then(resp => {
            props.onDeletePost(resp.data.id);
         })
         .catch((e) => console.log('Error al eliminar el post!'));
    };

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>
                <button 
                    className="btn btn-delete btn-block text-light" 
                    onClick={() => deletePost(props.id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostRow);