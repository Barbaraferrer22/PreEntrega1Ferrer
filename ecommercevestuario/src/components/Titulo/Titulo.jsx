import "./Titulo.css";

function Titulo({ titleObject }) {
  return (
    <div className="titulos">
      <h1>{titleObject.titulo}</h1>
      <h2>{titleObject.subtitulo}</h2>
    </div>
  );
}

export default Titulo;
