import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Titulo from "./components/Titulo/Titulo";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const titulo = "Valentina Carrillo";
  const subtitulo = "Diseños con Amor";

  return (
    <div>
      <NavBar />
      <Titulo titulo={titulo} subtitulo={subtitulo} />
      <Footer />
    </div>
  );
}

export default App;
