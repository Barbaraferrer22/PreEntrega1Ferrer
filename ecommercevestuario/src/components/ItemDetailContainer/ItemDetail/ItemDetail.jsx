import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Counter from "../../Counter/Counter";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { addProduct } = useCartContext();

  const onAdd = (count) => {
    toast("Su Producto se agrego al Carrito", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    addProduct({ ...product, quantity: count });
    setIsCounter(false);
  };

  return (
    <div className="row">
      <h2>Vista Detalle</h2>
      <div className="col">
        <img className="w-25" src={product.imagenURL} alt="imagen" />
        <div>
          <p>Nombre: {product.Nombre}</p>
          <p>Descripcion: {product.Descripcion}</p>
          <p>Precio: {product.Precio}</p>
        </div>
        <div className="col">
          {" "}
          {isCounter ? (
            <Counter inicial={1} stock={100} onAdd={onAdd} />
          ) : (
            <>
              <Link to={"/cart"}>
                <button className="btn btn-outline-dark ">
                  {" "}
                  Ir al Carrito{" "}
                </button>
              </Link>

              <Link to={"/"}>
                <button className="btn btn-outline-dark ">
                  {" "}
                  Ir al Inicio{" "}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
