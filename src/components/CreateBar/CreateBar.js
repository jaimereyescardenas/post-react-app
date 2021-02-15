import React, { useState } from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import BASE_URL from '../../helpers/data';
import * as actionTypes from '../../store/actions';

import './CreateBar.css';

const CreateBar = (props) => {

    const [titleState, setTitleState] = useState('');
    const [descState, setDescState] = useState('');

    const addPost = (title, desc) => {
        const post = {
            title: title,
            description: desc
        };

        axios.post(BASE_URL + '/post', post)
         .then(resp => {
            props.onAddPost(resp.data);
            clearInput();
         })
         .catch((e) => console.log('Error al agregar el post!'));
    };

    const clearInput = () => {
        setTitleState('');
        setDescState('');
    };

    return (
        <div className="row my-3">
            <div className="col-lg-8 col-12">
                <div className="row">
                    <div className="col-lg-4">
                        <input 
                            name="create-name"
                            placeholder="Nombre" 
                            className="form-control my-2" 
                            value={titleState}
                            onChange={(event) => setTitleState(event.target.value)}
                        />    
                    </div>
                    <div className="col-lg-8">
                        <input 
                            name="create-desc" 
                            placeholder="Descripción" 
                            className="form-control my-2" 
                            value={descState}
                            onChange={(event) => setDescState(event.target.value)}
                        />    
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <button 
                            className="btn btn-clear btn-block text-light my-2" 
                            onClick={() => clearInput()}
                        >
                            Limpiar
                        </button>
                    </div>
                    <div className="col-sm-6 col-12">
                        <button 
                            className="btn btn-create btn-block text-light my-2" 
                            onClick={() => addPost(titleState, descState)}
                        >
                            Crear
                        </button>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateBar);