import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Titulo from "./components/Titulo/Titulo";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartContainer } from "./components/CartContainer/CartContainer";
import CartContextProvider, {
  CartContext,
} from "./components/Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const titleObject = {
    titulo: "Valentina Carrillo",
    subtitulo: "Diseños con Amor",
  };
  const titulo = "Valentina Carrillo";
  const subtitulo = "Diseños con Amor";

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Titulo titleObject={titleObject} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:cid" element={<ItemListContainer />} />
          <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/contacto" element={<Formulario />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
