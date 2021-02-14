import React from "react";

export default function SearchBar() {
    return (
        <div className="row my-3">
            <div className="col-lg-10 col-md-9 col-sm-8 my-1 my-sm-0">
                <input name="search-name" placeholder="Filtrar por nombre" className="form-control search-name" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 my-1 my-sm-0">
                <button className="btn btn-info btn-block">Buscar &nbsp;
                    <span>
                        <img src="img/magnifying-glass-icon.svg" alt="Lupa" />
                    </span>
                </button>
            </div>
        </div>
    );
}