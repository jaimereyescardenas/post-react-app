import React from "react";

import PostRow from '../../components/PostRow/PostRow';
import './ResultsTable.css';

export default function ResultsTable(props) {

    return (
        <div>
            <div>
                <p className="d-none">Cantidad de posts: {props.posts.length}</p>
            </div>
            <table className="table table-striped Results-table">
                <thead className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th className="text-center">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.posts.length === 0 ? (
                        <tr>
                            <td 
                                colSpan="3" 
                                className="text-center"
                            >
                                No hay posts que mostrar
                            </td>
                        </tr>
                    ) : props.posts.map((post) => {
                        return (
                            <PostRow
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                description={post.description} 
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
