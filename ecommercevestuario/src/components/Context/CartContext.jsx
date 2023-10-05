import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addProduct = (newProduct) => {
    const indice = cartList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (indice !== -1) {
      cartList[indice].quantity += newProduct.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  const cantidadTotal = () =>
    cartList.reduce(
      (cantidadTotal, objProducto) => (cantidadTotal += objProducto.quantity),
      0
    );

  const precioTotal = () =>
    cartList.reduce(
      (precioTotal, objProducto) =>
        (precioTotal += objProducto.Precio * objProducto.quantity),
      0
    );

  const eliminarProducto = (pid) =>
    setCartList(cartList.filter((prod) => prod.id !== pid));

  const deleteCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        deleteCart,
        cantidadTotal,
        precioTotal,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
