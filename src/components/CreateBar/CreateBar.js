import React from "react";

export default function CreateBar() {
    return (
        <div className="row my-3">
            <div className="col-lg-3 col-md-2">
                <input name="create-name" placeholder="Nombre" className="form-control" />    
            </div>
            <div className="col-lg-5 col-md-4">
                <input name="create-desc" placeholder="Descripción" className="form-control" />    
            </div>
            <div className="col-lg-2 col-md-3">
                <button className="btn btn-secondary btn-block">
                    Limpiar
                </button>
            </div>
            <div className="col-lg-2 col-md-3">
                <button className="btn btn-success btn-block">
                    Crear
                </button>
            </div>
        </div>
    );
}