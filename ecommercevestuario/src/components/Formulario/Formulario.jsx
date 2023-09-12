import { useState } from "react";
import Form from "./Form";
import { formWhitValidation } from "./FormWhitValidation";

const FormWhitVadidation = formWhitValidation(Form);

const Formulario = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    email: "",
  });

  const handleOnchange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {/* <Form formData={formData} handleOnchange={handleOnchange} /> */}
      <FormWhitVadidation formData={formData} handleOnchange={handleOnchange} />
    </div>
  );
};

export default Formulario;
