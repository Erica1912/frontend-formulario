import React, { Fragment, useState } from "react";


const Formulario = () => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.name);
  };

  return (
    <Fragment>
      <h1>Formulario Usuario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Nombre"
            className="form-control"
            type="text"
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Email"
            className="form-control"
            type="text"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
