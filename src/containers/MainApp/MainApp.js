import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import Paragraph from '../../components/Paragraph/Paragraph';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsTable from '../../components/ResultsTable/ResultsTable';
import CreateBar from '../../components/CreateBar/CreateBar';

import BASE_URL from '../../helpers/data';
import * as actionTypes from '../../store/actions';

const MainApp = (props) => {

    if (!props.initialLoad) {
        axios.get(BASE_URL + '/posts').then(response => props.onInitialLoad(response.data));
    }

    return (
        <main className="container App-main">
            <div className="text-center mx-auto my-4">
                <Paragraph 
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, delectus non! Error et, praesentium aut laboriosam distinctio quaerat quos! Sunt, cupiditate tenetur enim dignissimos quisquam corporis harum placeat animi est.'}
                />
            </div>
            <SearchBar></SearchBar>
            <ResultsTable posts={props.posts}></ResultsTable>
            <div className="text-center mx-auto my-4">
                <Paragraph 
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, delectus non! Error et, praesentium aut laboriosam distinctio quaerat quos!'}
                />
            </div>
            <CreateBar/>
        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
