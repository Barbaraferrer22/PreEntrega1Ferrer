import Counter from "../../Counter/Counter";

export const ItemDetail = ({ product }) => {
  console.log(product);

  const onAdd = (count) => {
    alert("Se ha agregado al carrito " + count + " Producto");
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
          <Counter inicial={1} stock={10} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
