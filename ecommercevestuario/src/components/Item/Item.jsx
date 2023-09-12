import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div key={product.id} className="card w-25">
      <div className="card-body"></div>
      <img className="w-100" src={product.imagenURL} alt="imagen bikini" />
      <p>{product.Nombre}</p>
      <p>{product.Descripcion}</p>
      <p>Precio ${product.Precio}</p>
      <Link to={`/detalle/${product.id}`}>
        <button className="btn btn-outline-dark">Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
