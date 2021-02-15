import React from "react";
import PostRow from '../../components/PostRow/PostRow';

export default function ResultsTable(props) {

    return (
        <div>
            <div>
                <p className="d-none">Cantidad de posts: {props.posts.length}</p>
            </div>
            <table className="table table-striped results-table">
                <thead className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
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
                    ) : null}
                    {props.posts.map((post) => {
                        return (
                            <PostRow
                                key={post.id}
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
