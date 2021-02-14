import React from "react";

export default function ResultsTable() {
    return (
        <div>
            <table className="table table-striped table-sm-responsive results-table">
                <thead className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th colSpan="4">Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="">POST 1</td>
                        <td colSpan="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, delectus non! Error et, praesentium aut laboriosam distinctio quaerat quos! Sunt, cupiditate tenetur enim dignissimos quisquam corporis harum placeat animi est.</td>
                        <td>
                            <button className="btn btn-danger btn-block">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}