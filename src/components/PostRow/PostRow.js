import React from "react";

export default function PostRow(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>
                <button className="btn btn-danger btn-block">
                    Eliminar
                </button>
            </td>
        </tr>
    );
}