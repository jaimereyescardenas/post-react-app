import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import Paragraph from '../../components/Paragraph/Paragraph';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsTable from '../../components/ResultsTable/ResultsTable';
import CreateBar from '../../components/CreateBar/CreateBar';

import BASE_URL from '../../helpers/data';
import * as actionTypes from '../../store/actions';

import './MainApp.css';

const MainApp = (props) => {

    if (!props.initialLoad) {
        axios.get(BASE_URL + '/posts')
         .then(response => props.onInitialLoad(response.data))
         .catch((e) => console.log('Error al cargar los posts!'));
    }

    return (
        <main className="container App-main">
            <div className="text-center mx-auto my-4">
                <Paragraph 
                  text={'Esta es una aplicación web hecha con React y node.js, que administra registros de posts. Cada post tiene su nombre (título) y una descripción breve. Se puede agregar posts, filtrarlos por nombre y eliminarlos.'}
                />
            </div>
            <SearchBar></SearchBar>
            <ResultsTable posts={props.posts}></ResultsTable>
            <div className="text-center mx-auto my-4">
                <Paragraph 
                  text={'Puedes probar a crear un post completando los campos de abajo y presionando el botón "Crear".'}
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
        onInitialLoad: (payload) => dispatch({
            type: actionTypes.INITIAL_LOAD, payload: payload 
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
