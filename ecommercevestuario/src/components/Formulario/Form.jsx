export const Form = ({ handleOnchange, formData, errors, validateForm }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("enviando datos", formData);
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="Nombre"
        placeholder="Ingrese su Nombre"
        value={formData.Nombre}
        onChange={handleOnchange}
      />
      {errors && errors.Nombre && <span>{errors.Nombre}</span>}
      <input
        type="text"
        name="email"
        placeholder="Ingrese su email"
        value={formData.email}
        onChange={handleOnchange}
      />
      {errors && errors.email && <span>{errors.email}</span>}
      <button>Enviar</button>
    </form>
  );
};

export default Form;
