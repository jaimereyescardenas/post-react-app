import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import Paragraph from '../../components/Paragraph/Paragraph';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsTable from '../../components/ResultsTable/ResultsTable';
import CreateBar from '../../components/CreateBar/CreateBar';

import * as actionTypes from '../../store/actions';

const MainApp = (props) => {

    if (!props.initialLoad) {
        axios.get('http://localhost:8080/posts').then(response => props.onInitialLoad(response.data));
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
        posts: state.posts,
        initialLoad: state.initialLoad
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitialLoad: (payload) => dispatch({ type: actionTypes.INITIAL_LOAD, payload: payload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);