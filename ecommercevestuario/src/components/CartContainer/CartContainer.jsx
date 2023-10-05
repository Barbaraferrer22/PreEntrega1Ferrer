import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
  });
  const [id, setId] = useState("");

  const { cartList, deleteCart, precioTotal, eliminarProducto } =
    useCartContext();

  const handleAddOrder = (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map((prod) => {
      return {
        id: prod.id,
        Nombre: prod.Nombre,
        Precio: prod.Precio,
        cantidad: prod.quantity,
      };
    });
    order.total = precioTotal();

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          Nombre: "",
          Telefono: "",
          Email: "",
        });
        deleteCart();
      });
  };

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      {id !== "" && <h3> Se ha realizado la Compra de: {id}</h3>}
      {cartList.length > 0 ? (
        <div>
          {cartList.map((prod) => (
            <table key={prod.id}>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Prenda</th>
                  <th>Valor</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <img src={prod.imagenURL} width="71" />
                  </th>
                  <th>{prod.Nombre}</th>
                  <th>$ {prod.Precio}</th>
                  <th>{prod.quantity}</th>
                  <th>
                    <button
                      className="btn btn-success
      "
                      onClick={() => eliminarProducto(prod.id)}
                    >
                      {" "}
                      ❌{" "}
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          ))}
          <button
            className="btn btn-success
      "
            onClick={deleteCart}
          >
            Vaciar Carrito
          </button>
          <h3>Precio Total: $ {precioTotal()}</h3>
          <form onSubmit={handleAddOrder}>
            <input
              type="text"
              name="Nombre"
              placeholder="Ingresar Nombre"
              value={dataForm.Nombre}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="Telefono"
              placeholder="Ingresar Telefono"
              value={dataForm.Telefono}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="Email"
              placeholder="Ingresar Email"
              value={dataForm.Email}
              onChange={handleOnChange}
            />
            <button
              className="btn btn-success
      "
            >
              Terminar Compra
            </button>
          </form>
        </div>
      ) : (
        <center>
          {" "}
          <h2> Su carrito esta Vacio</h2>
          <Link
            className="btn btn-success
      "
            to="/"
          >
            Volver al Inicio
          </Link>
        </center>
      )}
    </>
  );
};

export default CartContainer;
