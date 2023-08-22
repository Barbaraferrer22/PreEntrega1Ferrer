import "./Titulo.css";

function Titulo(props) {
  return (
    <div className="titulos">
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
}

export default Titulo;
